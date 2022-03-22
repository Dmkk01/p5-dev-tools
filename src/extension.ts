import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import axios from 'axios';

import { referencesP5, referencesP5Sound } from "./references";
import { htmlTemplateHosted, htmlTemplateLocal, htmlTemplateLocalMin, sketchTemplateBasic } from "./templates";
import { createFile, checkIfExists, createDirectory } from "./utils";
import { classesP5 } from "./classes";


export function activate(context: vscode.ExtensionContext) {
  
  // Command to create a new p5.js project
  let disposable = vscode.commands.registerCommand(
    "p5-snippets-and-tools.create-p5-project-standard",
    () => {
      // Initialize variables
      const folderPath = vscode.workspace.workspaceFolders![0].uri.fsPath;
      let isMinimized: boolean = true;
      let cdnLink: string | undefined;
      let dirName: string | undefined; 
      let isHosted: boolean;
      let dirSelected: boolean;
      
      // Create 1st quick-pick (Directory)
      const quickPick = vscode.window.createQuickPick();
      quickPick.title = "Do you want to create a new directory?";
      quickPick.items = [{label: "Yes"}, { label: "No"}];
      
      quickPick.onDidChangeSelection( async ([item]) => {
        if (item.label === "Yes") {
          dirName = await vscode.window.showInputBox({ placeHolder: "Name of the directory" });
          createDirectory(path.join(folderPath, `/${dirName}`));
          dirSelected = true;
        } else {
          dirSelected = false;
        }
        quickPick.dispose();

        // Create 2nd quick-pick (Local | Hosted)
        const quickPick2 = vscode.window.createQuickPick();
        quickPick2.title = "Do you want to use a local or a hosted version?";
        quickPick2.items = [{label: "Hosted"}, { label: "Local"}];

        quickPick2.onDidChangeSelection( async ([item]) => {
          if (item.label === "Hosted") {
            isHosted = true;
          } else {
            isHosted = false;
            createDirectory(path.join(folderPath, dirSelected ? `/${dirName}/p5` : "/p5"));

            // Create 3rd quick-pick (Minimized)
            const quickPick3 = vscode.window.createQuickPick();
            quickPick3.title = "Do you want to use a minimized version (p5.min.js)?";
            quickPick3.items = [{label: "Yes"}, { label: "No"}];
            

            quickPick3.onDidChangeSelection( async ([item]) => {
              if (item.label === "Yes") {
                isMinimized = true;
                cdnLink = "https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.min.js";
              } else {
                isMinimized = false;
                cdnLink = "https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js";
              }
              quickPick3.dispose();
              
              // Create appropiate files
              let p5Path = dirSelected ? `/${dirName}/p5` : "/p5";
              axios.get(cdnLink).then(response => {
                createFile(path.join(folderPath, isMinimized ? p5Path + "/p5.min.js" : p5Path + "/p5.js"), response.data);
              });
              createFile(path.join(folderPath, dirSelected ? `/${dirName}/index.html` : "/index.html"), isMinimized ? htmlTemplateLocalMin : htmlTemplateLocal);
            });
            
            quickPick3.onDidHide(() => quickPick3.dispose());
            quickPick3.show();
          }
          quickPick2.dispose();

          // Files
          const files = [
            {
              name: "index.html",
              path: dirSelected ? `/${dirName}/index.html` : "/index.html",
              template: isHosted ? htmlTemplateHosted : htmlTemplateLocalMin
            },
            {
              name: "sketch.js",
              path: dirSelected ? `/${dirName}/sketch.js` : "/sketch.js",
              template: sketchTemplateBasic
            }
          ];
          
          // Create each file
          files.forEach(file => {
            if (checkIfExists(path.join(folderPath, file.path))) {
              vscode.window.showErrorMessage(`${file.name} already exists in the current directory!`);
              quickPick.dispose();
              return;
            } 
            createFile(path.join(folderPath, file.path), file.template);
          });
        });

        quickPick2.onDidHide(() => quickPick2.dispose());
        quickPick2.show();
      });

      quickPick.onDidHide(() => quickPick.dispose());
      quickPick.show();
    }
  );

  context.subscriptions.push(disposable);

  vscode.languages.registerHoverProvider("javascript", {
    provideHover(document, position) {
      let reference;
      const range = document.getWordRangeAtPosition(position);
      const word = document.getText(range);

      const referenceP5 = referencesP5.find((x) => x.element === word);
      const referenceSound = referencesP5Sound.find((x) => x.element === word);

      reference = referenceP5 ? referenceP5 : referenceSound ? referenceSound : null;

      if (reference) {
        const markdown = new vscode.MarkdownString(
          `${reference.description}\n`
        );

        markdown.appendCodeblock(`${reference.code}`, "javascript");

        let returnsText = "";
        if (reference.return) {
          returnsText = `\nReturns ${reference.return!.description} (${
            reference.return!.type
          })\n`;
        }
        markdown.appendMarkdown(returnsText);

        if (reference.syntax.length > 0) {
          reference.syntax.forEach((parameter) => {
            markdown.appendCodeblock(`${parameter.parameter}`, "javascript");
            if (parameter.description) {
              markdown.appendMarkdown(`* ${parameter.description}\n`);
            }
          });
        }

        markdown.isTrusted = true;

        return new vscode.Hover(markdown);
      } else {
        // const p5Range = [];
        // p5Range.push(range?.start);

        // const markdown = new vscode.MarkdownString(
        //   `${JSON.stringify(position)}`
        // );

        // markdown.isTrusted = true;

        // return new vscode.Hover(markdown);
        return ;
      }
    },
  });

  const provider1 = vscode.languages.registerCompletionItemProvider(
    "javascript",
    {
      provideCompletionItems() {
        return new Promise((resolve) => {
          let completionItems: vscode.CompletionItem[] = [];

          referencesP5.forEach((reference) => {
            const completionItem: vscode.CompletionItem =
              new vscode.CompletionItem(reference.element);
            completionItem.detail = "p5.js";
            completionItem.filterText = reference.element;
            completionItem.insertText = new vscode.SnippetString(
              reference.insert
            );
            completionItem.label = reference.element;
            completionItems.push(completionItem);
          });

          referencesP5Sound.forEach((reference) => {
            const completionItem: vscode.CompletionItem =
              new vscode.CompletionItem(reference.element);
            completionItem.detail = "p5.js sound";
            completionItem.filterText = reference.element;
            completionItem.insertText = new vscode.SnippetString(
              reference.insert
            );
            completionItem.label = reference.element;
            completionItems.push(completionItem);
          });

          classesP5.forEach((classP5) => {
            const completionItem: vscode.CompletionItem = new vscode.CompletionItem(classP5.element);
            completionItem.detail = "p5.js class";
            completionItem.filterText = classP5.element;
            completionItem.insertText = new vscode.SnippetString(
              classP5.insert
            );
            completionItem.label = classP5.element;
            completionItems.push(completionItem);
          });

          return resolve(completionItems);
        });
      },
    }
  );

  context.subscriptions.push(provider1);
}

export function deactivate() {}
