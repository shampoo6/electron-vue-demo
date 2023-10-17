console.log('preload')

const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    showMessage: () => {
        ipcRenderer.send('showMessageBoxSync')
    }
})