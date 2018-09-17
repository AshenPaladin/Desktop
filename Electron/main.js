// Modules to control application life and create native browser window
var fs = require('fs');
var spawn = require('child_process').spawn;
var osvar = process.platform;
const {app, BrowserWindow} = require('electron');

//starting backend


var executable = __dirname + "/Backend/LittleWeebDesktop";
if (fs.existsSync("/resources")) {
  // Do something
  executable = "/resources/app/Backend/LittleWeebDesktop";
}

if(osvar == 'win32') {
  executable = executable + ".exe";
  console.log("Starting backend with windows filepath: " + executable)
} else {
  
  console.log("Starting backend with unix filepath: " + executable)
}


var child;
try {
    child = spawn(executable, [""], { detached: true });

    child.on('exit', function (code, signal) {
        console.log('child process exited with ' +
            `code ${code} and signal ${signal}`);
        app.quit();
    });

    child.on('error', function (error) {
        console.log(error);
        console.log("Possibility is that the back-end is already running, so application may still run.");
    });

    child.on('close', function () {
        console.log('child process closed. ');
    });

    child.stdout.on('data', (data) => {
        console.log(`child stdout:\n${data}`);
    });

    child.stderr.on('data', (data) => {
        console.log(`child stderr:\n${data}`);
    });

} catch (E) {
    console.log("Could not start child process running back-end.");
}


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1280, height: 720})

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

    console.log("all windows closed, so app is not running, killing childprocess running backend");
    try {
        child.kill();
    } catch (E) {
        console.log("Could not close childprocess: ");
        console.log(E);
    }
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

app.on('will-quit', () => {
    // Unregister all shortcuts. 
    console.log("Will quit, so killing child process running backend.");
    try {
        child.kill();
    } catch (E) {
        console.log("Could not close childprocess: ");
        console.log(E);
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
