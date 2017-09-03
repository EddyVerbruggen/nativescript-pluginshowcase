NativeScript plugins showcase
-----------------------------

[![Build Status][build-status]][build-url]
![plugins 24](https://img.shields.io/badge/plugins-24-brightgreen.svg)
[![Twitter Follow][twitter-image]][twitter-url]

[build-status]:https://travis-ci.org/EddyVerbruggen/nativescript-pluginshowcase.svg?branch=master
[build-url]:https://travis-ci.org/EddyVerbruggen/nativescript-pluginshowcase
[twitter-image]:https://img.shields.io/twitter/follow/eddyverbruggen.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/eddyverbruggen

<img src="screenshots/ios/01-home.png" height="378px" /> <img src="screenshots/ios/02-feedback-menu.png" height="378px" /> <img src="screenshots/ios/03-mapping-menu.png" height="378px" /> <img src="screenshots/ios/04-mapping-info.png" height="378px" />

### What's this?
Glad you asked 😄.. I need it to demo a few plugins and wanted to play a bit more with NativeScript & Angular.

### CanIUse?
This app is in active development and optimized **for iOS only** at the moment.

> Well, it works on Android, but some UI elements are off so I don't recommend installing it there yet. 

```bash
git clone https://github.com/EddyVerbruggen/nativescript-pluginshowcase
cd nativescript-pluginshowcase
npm run ios
# or: npm run ios.emulator
# or even: npm run start-ios-bundle (for a faster startup experience because of Webpack with Uglify)
```

### Notes
* Don't judge Mapbox performance on the iOS simulator. It only blows you away on a real device.
* The app will crash if you change the App icon after a Toast was shown. I've sent a [PR to fix that](https://github.com/devxoul/Toaster/pull/116).
