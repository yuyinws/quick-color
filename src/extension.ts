import * as vscode from 'vscode'
import { colorOptions } from './colorOption'

const pickOptions: vscode.QuickPickOptions = {
  matchOnDescription: true,
  matchOnDetail: true,
  placeHolder: 'Type color name',
}

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'quick-color.quickColor',
    () => {
      vscode.window
        .showQuickPick(colorOptions, pickOptions)
        .then((selection) => {
          const editor = vscode.window.activeTextEditor
          if (!editor) {
            return
          }
          editor
            .edit((editBuilder) => {
              editBuilder.delete(editor.selection)
            })
            .then(() => {
              editor.edit((editBuilder) => {
                editBuilder.insert(
                  editor.selection.start,
                  selection ? selection.hex : '',
                )
              })
            })
        })
    }
  )

  context.subscriptions.push(disposable)
}

export function deactivate() {}
