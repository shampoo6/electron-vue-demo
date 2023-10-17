console.log('preload')

const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('onCheckUpdateInfo', (callback) => {
    ipcRenderer.on('checkUpdate/info', (ev, info) => {
        if (typeof callback === 'function')
            callback(info)
    })
})

contextBridge.exposeInMainWorld('electronAPI', {
    showMessage: () => {
        ipcRenderer.send('showMessageBoxSync')
    },
    checkForUpdate: () => {
        ipcRenderer.send('checkUpdate/start')
    }
})