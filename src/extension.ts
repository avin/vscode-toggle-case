import * as vscode from 'vscode';
import { transformText } from './toggleCase';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('toggle-case.toggleCase', async () => {
		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			vscode.window.showInformationMessage('Open an editor to toggle case.');
			return;
		}

		let hasChanges = false;

		await editor.edit(editBuilder => {
			for (const selection of editor.selections) {
				if (selection.isEmpty) {
					continue;
				}

				const selectedText = editor.document.getText(selection);
				if (!selectedText) {
					continue;
				}

				const transformed = transformText(selectedText);
				editBuilder.replace(selection, transformed);
				hasChanges = true;
			}
		});

		if (!hasChanges) {
			vscode.window.showInformationMessage('Select text to toggle case.');
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
