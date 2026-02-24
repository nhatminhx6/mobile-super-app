# MeraSuperApp

Native shell (iOS SwiftUI + Android Kotlin) that embeds React Native mini-apps by `moduleName`.

**Mini-app module names**
- `miniapp.booking`
- `miniapp.billing`
- `miniapp.profile`

## Prerequisites
- Node.js 18+
- Xcode 15+
- CocoaPods (`sudo gem install cocoapods` if needed)
- Android Studio + SDKs
- JDK 17

## Install JS dependencies
```bash
cd /Users/nhatminh/Data/ReactNative/mobile-super-app/MeraSuperApp/rn
npm install
```

## Start Metro (dev mode)
```bash
cd /Users/nhatminh/Data/ReactNative/mobile-super-app/MeraSuperApp/rn
npm run start
```

## iOS (SwiftUI shell)
```bash
cd /Users/nhatminh/Data/ReactNative/mobile-super-app/MeraSuperApp/ios
pod install
```

Then run the app:
```bash
cd /Users/nhatminh/Data/ReactNative/mobile-super-app/MeraSuperApp/rn
npm run ios
```

Or open the Xcode project:
```bash
open /Users/nhatminh/Data/ReactNative/mobile-super-app/MeraSuperApp/ios/MeraSuperApp.xcodeproj
```

## Android (Kotlin shell)
```bash
cd /Users/nhatminh/Data/ReactNative/mobile-super-app/MeraSuperApp/rn
npm run android
```

Or via Gradle:
```bash
cd /Users/nhatminh/Data/ReactNative/mobile-super-app/MeraSuperApp/android
./gradlew installDebug
```

## Production bundles
```bash
cd /Users/nhatminh/Data/ReactNative/mobile-super-app/MeraSuperApp/rn
npm run bundle:ios
npm run bundle:android
```

## Notes
- iOS and Android native shells choose which React Native mini-app to load by `moduleName`.
- Initial props are passed from native and displayed on each mini-app Home screen.
- Install JS dependencies before running `pod install` or any Gradle tasks, because the native builds depend on `rn/node_modules`.
