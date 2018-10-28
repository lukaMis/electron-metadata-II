const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

// declare it globally so it will not be garbage collected
let mainWindow

app.on('ready', () => {
  console.log('app is ready')

  const htmlPath = path.join('src', 'index.html')

  mainWindow = new BrowserWindow()

  mainWindow.loadFile(htmlPath)

  setTimeout(() => {
    mainWindow.webContents.send(
      'randomEvent',
      'randomEvent data from main process after timeout'
    )
  }, 4000)
})

ipcMain.on('randomEvent', (event, data) => {
  console.log(`Logging ${data} in main process.`)
  mainWindow.webContents.send('randomEvent', data)
})
