const { ipcRenderer } = require('electron')

let index = 0

ipcRenderer.on('randomEvent', (event, data) => {
  console.log(`Logging ${data} in renderer.`)
  index++

  // preven this to loop forewer
  if (index < 9) {
    ipcRenderer.send('randomEvent', index)
  }
})
ipcRenderer.send('randomEvent', index)
