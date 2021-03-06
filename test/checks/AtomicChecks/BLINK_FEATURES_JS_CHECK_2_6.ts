import { BrowserWindow } from "electron";

export default function initialize() {

  let mainWindow: BrowserWindow | undefined;

  function createWindow() {
    mainWindow = new BrowserWindow({
      "webPreferences": {
        "blinkFeatures": "CSSVariables"
      }
    });

    mainWindow = new BrowserWindow({
      "webPreferences": {
        "blinkFeatures": "UnknownFeature"
      }
    });

    let something;

    mainWindow = new BrowserWindow({
      "webPreferences": {
        "blinkFeatures": something
      }
    });

    mainWindow = new BrowserWindow({
      webPreferences: {
        blinkFeatures: "CSSVariables"
      }
    });

    mainWindow = new BrowserWindow({
      webPreferences: {
        blinkFeatures: "UnknownFeature"
      }
    });

    mainWindow = new BrowserWindow({
      webPreferences: {
        blinkFeatures: something
      }
    });
  }
}
