import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

import { references } from "./references";
import { htmlTemplateHosted, sketchTemplateBasic } from "./templates";
import { createFile, checkIfExists, createDirectory } from "./utils";


export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "p5-snippets-and-tools.create-p5-project-standard",
    () => {
      const folderPath = vscode.workspace.workspaceFolders![0].uri.fsPath;

      const quickPick = vscode.window.createQuickPick();
      quickPick.title = "Do you want to create a new directory?";
      quickPick.items = [{label: "Yes"}, { label: "No"}];
      let dirName: string | undefined; 
      let dirSelected: boolean;

      quickPick.onDidChangeSelection( async ([item]) => {
        if (item.label === "Yes") {
          dirName = await vscode.window.showInputBox({ placeHolder: "Name of the directory" });
          createDirectory(path.join(folderPath, `/${dirName}`));
          dirSelected = true;
        } else {
          dirSelected = false;
        }
        quickPick.dispose();

        const files = [
          {
            name: "index.html",
            path: dirSelected ? `/${dirName}/index.html` : "/index.html",
            template: htmlTemplateHosted
          },
          {
            name: "sketch.js",
            path: dirSelected ? `/${dirName}/sketch.js` : "/sketch.js",
            template: sketchTemplateBasic
          }
        ];
  
        files.forEach(file => {
          if (checkIfExists(path.join(folderPath, file.path))) {
            vscode.window.showErrorMessage(`${file.name} already exists in current workspace!`);
            quickPick.dispose();
            return;
          } 
          createFile(path.join(folderPath, file.path), file.template);
        });
      });

      quickPick.onDidHide(() => quickPick.dispose());
      quickPick.show();
    }
  );

  context.subscriptions.push(disposable);

  vscode.languages.registerHoverProvider("javascript", {
    provideHover(document, position) {
      const range = document.getWordRangeAtPosition(position);
      const word = document.getText(range);

      const reference = references.find((x) => x.element === word);

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
      }
    },
  });

  const provider1 = vscode.languages.registerCompletionItemProvider(
    "javascript",
    {
      provideCompletionItems() {
        return new Promise((resolve) => {
          let completionItems: vscode.CompletionItem[] = [];

          references.forEach((reference) => {
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

          return resolve(completionItems);
        });
      },
    }
  );

  context.subscriptions.push(provider1);
}

export function deactivate() {}
