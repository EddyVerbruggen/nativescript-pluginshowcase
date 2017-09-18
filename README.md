NativeScript plugin showcase
----------------------------

[![Appstore download][appstore-image]][appstore-url]
[![Playtore download][playstore-image]][playstore-url]

![iOS plugins 27](https://img.shields.io/badge/iOS_plugins-27-blue.svg)
![Android plugins 22](https://img.shields.io/badge/Android_plugins-22-brightgreen.svg)
[![Twitter Follow][twitter-image]][twitter-url]


[appstore-image]:screenshots/apple-appstore-badge.svg
[appstore-url]:https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1281334006
[playstore-image]:screenshots/google-playstore-badge.svg
[playstore-url]:https://play.google.com/store/apps/details?id=org.nativescript.pluginshowcase
[build-status]:https://travis-ci.org/EddyVerbruggen/nativescript-pluginshowcase.svg?branch=master
[build-url]:https://travis-ci.org/EddyVerbruggen/nativescript-pluginshowcase
[twitter-image]:https://img.shields.io/twitter/follow/eddyverbruggen.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/eddyverbruggen


<img src="screenshots/ios/01-home.png" height="378px" /> <img src="screenshots/ios/02-feedback-menu.png" height="378px" /> <img src="screenshots/ios/03-mapping-menu.png" height="378px" /> <img src="screenshots/ios/04-mapping-info.png" height="378px" />

### What's this?
Glad you asked 😄.. I need it to demo a few plugins and wanted to play a bit more with NativeScript & Angular.

### Plugin themes included
- [Feedback](app/feedback/)
- [Mapping](app/mapping/)
- [Speech](app/speech/)
- [Input](app/input/)
- [App Icon](app/appicon/)
- [Augmented Reality](app/ar/)


### CanIUse?
Sure, you can either download it from the [AppStore](https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1281334006) (Play store is coming soon!) or build it yourself.

```bash
git clone https://github.com/EddyVerbruggen/nativescript-pluginshowcase
cd nativescript-pluginshowcase
npm run ios
# or: npm run ios.emulator
# or even: npm run start-ios-bundle (for a faster startup experience because of Webpack with Uglify)
```

### Notes
* Don't judge Mapbox performance on the simulator. It only blows you away on a real device.
* (iOS) The app will crash if you change the App icon after a Toast was shown. I've sent a [PR to fix that](https://github.com/devxoul/Toaster/pull/116).
