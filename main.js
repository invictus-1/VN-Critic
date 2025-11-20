const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        icon: path.join(__dirname, 'icon.ico'), // Optional: if you have an icon
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, // Allows simple file access
            webSecurity: false // Helps avoid some local file restriction issues
        },
        autoHideMenuBar: true // Hides the "File Edit View" menu for a cleaner look
    });

    // Load the index.html of the app.
    win.loadFile('index.html');
}

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});