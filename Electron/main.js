// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
var spawn = require('child_process').spawn;
var osvar = process.platform;

//starting backend
var executable = "./Backend/LittleWeebDesktop";
if(osvar == 'win32') {
  executable = executable + ".exe";
  console.log("Starting backend with windows filepath: " + executable)
} else {
  
  console.log("Starting backend with unix filepath: " + executable)
}

var child = spawn(executable, [""], { detached: false});

child.on('exit', function (code, signal) {
  console.log('child process exited with ' +
              `code ${code} and signal ${signal}`);
  app.quit();
});

child.on('error', function (error) {
  console.log(error);
  app.quit();
});

child.on('close', function () {
  console.log('child process closed. ');
  app.quit();
});

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
  console.log(`child stderr:\n${data}`);
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1280, height: 720,  icon: 'icons/64x64.png'})

  // and load the index.html of the app.
  mainWindow.loadFile('./Backend/wwwroot/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
