const {app} = require("electron");
const path = require("path");
const fs = require("fs");
const HOME = require("os").homedir();

const { powerMonitor } = require('electron')

app.on('ready', () => {
    const filename = path.join(HOME, "lockLog.txt");
    const fd = fs.openSync(filename, "a");
    console.log(`---> Logging entries to ${filename}`);

    const logLine = (content) => {
        const timestamp = (new Date()).toISOString();
        const logString = `[${timestamp}] ${content}`;
        console.log(logString);
        fs.writeSync(fd, `${logString}\r\n`);
    };

    const logEvent = (type) => {
        logLine(`type: ${type}, idle for: ${powerMonitor.getSystemIdleTime()}`);
    };

    app.on("before-quit", () => {
        logLine("Lock logging stopped");
        fs.close(fd);
    });

    ["lock-screen", "unlock-screen", "resume", "suspend", "on-ac", "on-battery", "shutdown"].forEach(e => {
        powerMonitor.on(e, () => logEvent(e));
    });
    logLine("Lock logging started");
});