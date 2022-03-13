import * as vscode from "vscode";
import { references } from "./references";

//https://github.com/microsoft/vscode-extension-samples/blob/main/completions-sample/src/extension.ts
export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "p5-snippets-and-tools" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "p5-snippets-and-tools.helloWorld",
    () => {

      vscode.window.showInformationMessage(
        "Hello World from P5 Snippets and Tools!"
      );
    }
  );

  context.subscriptions.push(disposable);

  vscode.languages.registerHoverProvider("javascript", {
    provideHover(document, position, token) {
      const range = document.getWordRangeAtPosition(position);
      const word = document.getText(range);

	    const check = references.find(x => x.element === word);

      if (check) {
        const markdown = new vscode.MarkdownString(`${check.description}\n`);
        markdown.appendCodeblock(`${check.code}`, "javascript");
        if (check.syntax.length > 0) {
          check.syntax.forEach(element => {
            markdown.appendCodeblock(`${element.parameter}`, "javascript");
            markdown.appendMarkdown(`* ${element.description}\n`);	
          });
        }

        markdown.isTrusted = true;

        return new vscode.Hover(markdown);
      }
    },
  });

  const provider1 = vscode.languages.registerCompletionItemProvider('javascript', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
      return new Promise((resolve, reject) => { 
        let completionItems: vscode.CompletionItem[] = [];

        references.forEach(reference => {
          const completionItem:vscode.CompletionItem = new vscode.CompletionItem(reference.element);
          completionItem.detail = "p5.js";
          completionItem.filterText = reference.element;
          completionItem.insertText = new vscode.SnippetString(reference.insert);
          completionItem.label = reference.element;
          completionItems.push(completionItem);
        });

        return resolve(completionItems) ;
      });
		}
	});

  context.subscriptions.push(provider1);
}

export function deactivate() {}
