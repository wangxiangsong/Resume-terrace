/**
 * @desc electron 主入口
 */

const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');

const ROOT_PATH = path.join(app.getAppPath(), '../');

ipcMain.on('get-root-path', (event: Electron.IpcMainEvent, arg: string) => {
  event.reply('reply-root-path', ROOT_PATH);
});

function isDev() {
  return process.env.NODE_ENV === 'development';
}

function createWinow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.webContents.on('before-input-event', (event: any, input: any) => {
    if (input.control && input.key.toLowerCase() === 't') {
      event.preventDefault();
      mainWindow.webContents.openDevTools();
    }
  });

  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:7001`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
  }
}

app.whenReady().then(() => {
  createWinow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWinow();
  });
});
