import {autoUpdater} from "electron-updater";
import {BrowserWindow, ipcMain} from 'electron'

console.log('自动更新脚本运行')

autoUpdater.autoDownload = true;

autoUpdater.on('checking-for-update', function () {
    sendStatusToWindow('Checking for update...');
});

autoUpdater.on('update-available', function (info) {
    sendStatusToWindow('Update available.');
});

autoUpdater.on('update-not-available', function (info) {
    sendStatusToWindow('Update not available.');
});

autoUpdater.on('error', function (err) {
    sendStatusToWindow('Error in auto-updater.');
    sendStatusToWindow(err);
});

autoUpdater.on('download-progress', function (progressObj) {
    // let log_message = 'Download speed: ' + progressObj.bytesPerSecond;
    // log_message = log_message + ' - Downloaded ' + parseInt(progressObj.percent) + '%';
    // log_message = log_message + ' (' + progressObj.transferred + '/' + progressObj.total + ')';
    let info = {
        speed: progressObj.bytesPerSecond,
        percent: progressObj.percent,
        transferred: progressObj.transferred,
        total: progressObj.total
    };

    sendStatusToWindow(JSON.stringify(info));
});

autoUpdater.on('update-downloaded', function (info) {
    sendStatusToWindow('Update downloaded; will install in 1 seconds');
    setTimeout(function () {
        autoUpdater.quitAndInstall();
    }, 1000);
});

function sendStatusToWindow(message) {
    console.log(message)
    let window = BrowserWindow.getAllWindows().find(w => !w.isDestroyed());
    window.webContents.send('checkUpdate/info', message);
}

ipcMain.on('checkUpdate/start', () => {
    console.log('开始更新')
    autoUpdater.checkForUpdatesAndNotify();
});