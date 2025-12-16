# AdMob Setup Instructions

This app is configured to use Google AdMob for displaying ads. Follow these steps to set up AdMob in your app.

## 📋 Prerequisites

1. A Google AdMob account (create one at https://apps.admob.com)
2. Your app must be registered in Google Play Console (Android) or App Store Connect (iOS)

## 🔧 Setup Steps

### 1. Install Dependencies

The AdMob package is already added to `package.json`. Install it:

```bash
npm install
```

### 2. Configure AdMob App IDs

1. Go to https://apps.admob.com
2. Create a new app (or select your existing app)
3. Get your **App ID** for both Android and iOS
4. Update `app.json` with your real App IDs:

```json
{
  "plugins": [
    [
      "react-native-google-mobile-ads",
      {
        "androidAppId": "ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX",
        "iosAppId": "ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX"
      }
    ]
  ]
}
```

### 3. Create Ad Units

1. In AdMob dashboard, go to **Apps** → Select your app → **Ad units**
2. Create ad units:
   - **Banner Ad** (for Android and iOS separately)
   - **Interstitial Ad** (for Android and iOS separately)
3. Copy the Ad Unit IDs

### 4. Update Ad Unit IDs

Edit `utils/adConfig.ts` and replace the test IDs with your real Ad Unit IDs:

```typescript
export const AD_UNIT_IDS = {
  BANNER_ANDROID: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX', // Your real ID
  BANNER_IOS: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX', // Your real ID
  INTERSTITIAL_ANDROID: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX', // Your real ID
  INTERSTITIAL_IOS: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX', // Your real ID
};
```

### 5. Build Development Build

⚠️ **Important**: AdMob requires a **development build** (not Expo Go). You cannot test ads in Expo Go.

#### For Android:
```bash
npx expo prebuild
npx expo run:android
```

#### For iOS:
```bash
npx expo prebuild
npx expo run:ios
```

Or use EAS Build:
```bash
eas build --profile development --platform android
eas build --profile development --platform ios
```

## 📍 Ad Placement

### Banner Ads
Banner ads are displayed at the bottom of:
- **Home Screen** (`app/(tabs)/index.tsx`)
- **Categories Screen** (`app/(tabs)/categories.tsx`)
- **Rewards Screen** (`app/(tabs)/rewards.tsx`)

### Interstitial Ads
Interstitial ads are shown:
- **After level completion** (every 2 completions) - in `app/reward.tsx`
- **After challenge completion** - in `app/challenge.tsx`

## ⚙️ Ad Settings

You can adjust ad frequency in `utils/adConfig.ts`:

```typescript
export const AD_SETTINGS = {
  INTERSTITIAL_FREQUENCY: 2, // Show ad every 2 level completions
  MIN_TIME_BETWEEN_ADS: 60000, // 1 minute minimum between ads
};
```

## 🧪 Testing

### Test Ad Unit IDs
The app currently uses **test ad unit IDs** which are safe for development. These will show test ads that don't generate revenue.

### Real Ads
Once you replace the test IDs with your real Ad Unit IDs, real ads will be displayed.

## 🚨 Important Notes

1. **COPPA Compliance**: The app is configured with `requestNonPersonalizedAdsOnly: true` to comply with COPPA (Children's Online Privacy Protection Act) since this is a kids' app.

2. **Development Build Required**: Ads will NOT work in Expo Go. You must create a development build.

3. **Test Ads**: Always use test ad unit IDs during development to avoid invalid traffic.

4. **Ad Revenue**: Real ads will only generate revenue after:
   - Your app is published
   - You've replaced test IDs with real IDs
   - AdMob has approved your app

## 🐛 Troubleshooting

### Ads not showing?
1. Check that you're using a development build (not Expo Go)
2. Verify your App IDs in `app.json`
3. Verify your Ad Unit IDs in `utils/adConfig.ts`
4. Check console logs for error messages
5. Ensure your device has internet connection

### Build errors?
1. Run `npx expo prebuild --clean` to regenerate native code
2. Make sure all dependencies are installed: `npm install`
3. For iOS, ensure CocoaPods are installed: `cd ios && pod install`

## 📚 Resources

- [AdMob Documentation](https://developers.google.com/admob)
- [react-native-google-mobile-ads](https://github.com/react-native-google-mobile-ads/react-native-google-mobile-ads)
- [Expo Development Builds](https://docs.expo.dev/development/introduction/)

