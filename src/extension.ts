import * as vscode from 'vscode'
import { colorOptions } from './colorOption'

const pickOptions: vscode.QuickPickOptions = {
  matchOnDescription: true,
  matchOnDetail: true,
  placeHolder: 'Type color name',
}

const loadCustomColor = () => {
  let config: vscode.WorkspaceConfiguration | undefined = vscode.workspace
    .getConfiguration()
    .get('quickColor.customColor')
  for (let i in config) {
    let optionIndex = colorOptions.findIndex((item) => item.label === i)
    if (optionIndex > -1) {
      colorOptions[optionIndex].hex = config[i]
      colorOptions[optionIndex].description = config[i]
    }
  }
}

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'quick-color.quickColor',
    () => {
      loadCustomColor()
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
                  selection ? selection.hex : ''
                )
              })
            })
        })
    }
  )

  context.subscriptions.push(disposable)
}

export function deactivate() {}
