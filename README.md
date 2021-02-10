This repo contains a short script to capture and log screen lock (and power status) events. I've found it useful to
track my own timekeeping - because it's real nice to know how long that lunch-break took. Also logs idle time - because
it's useful to know if that was an intentional lock or an AFK timeout...

Notes on OS Support
===================
- Currently only tested on Windows 10 - might work on Macs too
- Uses the [Electron power monitor API](https://www.electronjs.org/docs/api/power-monitor), so Linux support isn't currently viable.

Usage
=====

```
npm install
npm start
```

Once dependencies are installed, you can also use run.bat to start the logger.

TODO
====

* Is there something more lightweight than electron that could be used to get lock events? Almost certainly...
* Investigate alternative solutions for Linux
