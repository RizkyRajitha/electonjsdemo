//const electron = require('electron')
const { app, BrowserWindow } = require("electron");

//#0d47a1 blue darken-4   backgroundColor: "#F7C136"

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 100,
    backgroundColor: "#222233",
    frame: false
  });
  mainWindow.loadFile("index.html");
  mainWindow.back;

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
