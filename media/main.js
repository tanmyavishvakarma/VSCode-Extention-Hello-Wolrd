// It cannot access the main VS Code APIs directly.
(function () {
    const vscode = acquireVsCodeApi();
  
    console.log("hello there from javascript");
  })();