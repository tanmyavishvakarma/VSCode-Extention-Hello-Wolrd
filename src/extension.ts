// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscricket" is now active!');
	context.subscriptions.push(
		vscode.commands.registerCommand('vscricket.helloWorld', () => {
			// vscode.window.showInformationMessage('Hello  from VScricket!');
			HelloWorldPanel.createOrShow(context.extensionUri)
	
		})
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('vscricket.ask', async ()=>{
			const answer=await vscode.window.showInformationMessage(
				"How was your day",
				"good",
				"bad"
			);
			if(answer=="bad"){
				vscode.window.showInformationMessage("sshit")
			}
		})
	)
}

// this method is called when your extension is deactivated
export function deactivate() {}
