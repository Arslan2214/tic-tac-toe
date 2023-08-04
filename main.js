const { app, BrowserWindow } = require('electron')

const runApp = () => {
    const dis = new BrowserWindow({
        width: 1000,
        height: 800,
    })

    console.log('Main Js prints...')
    dis.loadFile('index.html')
    // dis.webContents.openDevTools()
}

app.whenReady().then(runApp)
