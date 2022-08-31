# Windows installation

This is the installation of appium for windows

## Installation

### Install node Js
Install the nodeJS, Download on this URL [nodejs]("https://nodejs.org/en/download/")

To make sure node is installed type
```bash
node -v
npm -v
```

### Install Java SDK
Install Java JDK using this url [Java JDK]("https://adoptium.net/download")

After installation go to Environment Variables and look for the java on the program files --> Java --> bin and copy the path and paste on the environment variables

### Install Android Studios
Download and install the Android Studio [Android Studio]("https://developer.android.com/studio?gclid=Cj0KCQjwjbyYBhCdARIsAArC6LJez5MXTZ_QJYJMvnzvHChkrsC6lLdCr63jczkdbeoGHwWFXPsF8R4aAlyOEALw_wcB&gclsrc=aw.ds")

After installation go to Users --> Your Name --> AppData --> Local --> Android --> Sdk look for the `platforms` and `platform tools` and put on the environment variables 

### Download and Install Appium inspector
[Appium inspector]("https://github.com/appium/appium-inspector/releases/download/v2022.8.1/Appium-Inspector-windows-2022.8.1.exe")

### Appium installation
Type 
```bash
npm install -g appium@next
```
Verify if appium is installed type appium -v

Install the Appium doctor
```bash
npm install -g appium-doctor
```