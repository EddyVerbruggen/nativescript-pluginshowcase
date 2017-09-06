AR test
=======

```bash
tns create artest --ng
cd artest
tns platform add ios
tns plugin add ../nativescript-ar-0.0.3.tgz
tns build ios
```

- Copy the art.scnassets folder to app/App_Resources/iOS

### Xcode "❤️"
- Start Xcode 9 (beta) and open your project at platforms/ios/artest.xcodeproj (or rather artest.xcworkspace if you have one because of some cocoapod in your project).
- Connect your iPad running iOS 11 and hit the PLAY button (after fixing the signing BS).
- Enjoy the {N} Angular hello world template while it lasts.
- Hit the STOP button in Xcode and quit the darn thing.

### Add some code
Go back to the better IDE and..
- Browse to the module where you want to show off some AR goodness and add:

```typescript
import { registerElement } from "nativescript-angular/element-registry";
registerElement("AR", () => require("nativescript-ar").AR);
```

- Open a view that's in the same module (or you've added it to the global app module) and add:

```html
<GridLayout rows="auto, *" class="page">
    <Label row="0" text="Scan a surface, then tap it like crazy!" class="p-20" horizontalAlignment="center"></Label>
    <AR row="1">
        <!-- you can add layouts here if you like to overlay the AR view -->
    </AR>
</GridLayout>
```

- Open its component and add:

```typescript
// import
import { AR } from "nativescript-ar";

    constructor(private itemService: ItemService) {
        // if this is false on a modern iOS 11 device, rebuild in Xcode
        console.log("AR supported? " + AR.isSupported());
     }
```

### All set
Now do `tns run ios` and sign with the profile you just used in Xcode (not that it matters, but it's easiest).