# AdMob Troubleshooting Guide

## Error: "TurboModuleRegistry.getEnforcing(...): 'RNGoogleMobileAdsModule' could not be found"

This error occurs when the AdMob native module is not available. This is **expected behavior** in certain scenarios.

### ✅ Why This Happens

1. **Running in Expo Go**: Expo Go doesn't support native modules like AdMob
2. **Development build not created**: The native module needs to be compiled into your app
3. **Module not properly linked**: After installation, native code needs to be rebuilt

### 🔧 Solutions

#### Option 1: Create a Development Build (Recommended)

AdMob requires a **development build** because it uses native code that Expo Go doesn't support.

**For Android:**
```bash
# Install dependencies
npm install

# Generate native code
npx expo prebuild

# Run on Android
npx expo run:android
```

**For iOS:**
```bash
# Install dependencies
npm install

# Generate native code
npx expo prebuild

# Install CocoaPods dependencies
cd ios && pod install && cd ..

# Run on iOS
npx expo run:ios
```

#### Option 2: Use EAS Build

If you prefer cloud builds:

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure EAS
eas build:configure

# Build for development
eas build --profile development --platform android
# or
eas build --profile development --platform ios
```

#### Option 3: Disable Ads for Development (Temporary)

The app is designed to gracefully handle missing AdMob. Ads will simply not show, but the app will continue to work normally.

### 📱 Current Status

The app is configured to:
- ✅ **Gracefully handle missing AdMob** - No crashes, ads just won't show
- ✅ **Use test ad IDs** - Safe for development
- ✅ **Work in Expo Go** - App functions normally, just without ads

### 🧪 Testing Ads

To actually test ads, you **must**:

1. Create a development build (see Option 1 above)
2. Install the development build on your device
3. Run the app from the development build (not Expo Go)

### ⚠️ Important Notes

- **Expo Go**: Ads will NOT work in Expo Go. This is normal and expected.
- **Development Build**: Ads will work in a development build.
- **Production Build**: Ads will work in production builds.

### 🔍 Verify Installation

Check if the module is available:

```javascript
// In your app, check console logs
// You should see: "AdMob library not available" if in Expo Go
// Or: "AdMob initialized" if in development build
```

### 📚 Next Steps

1. **For Development**: Continue using Expo Go (ads won't show, but app works)
2. **For Testing Ads**: Create a development build
3. **For Production**: Use EAS Build or local build with your real AdMob IDs

### 🆘 Still Having Issues?

1. Make sure `react-native-google-mobile-ads` is in `package.json`
2. Run `npm install` to ensure it's installed
3. Run `npx expo prebuild --clean` to regenerate native code
4. For iOS: Make sure CocoaPods are installed and run `pod install` in the `ios` folder

