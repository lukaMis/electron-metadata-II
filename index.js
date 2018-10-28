const { app, BrowserWindow } = require('electron')
const path = require('path')

// declare it globally so it will not be garbage collected
let mainWindow

app.on('ready', () => {
  console.log('app is ready')

  const htmlPath = path.join('src', 'index.html')

  mainWindow = new BrowserWindow()

  mainWindow.loadFile(htmlPath)
})
