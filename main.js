const { app, BrowserWindow } = require('electron')

// This function will run when the app is ready
const runApp = () => {
    
    const dis = new BrowserWindow({
        width: 1000,
        height: 800,
    })

    dis.loadFile('index.html')      // Which file to Load
    // dis.webContents.openDevTools()
}

// Rendering our App
app.whenReady().then(runApp)
