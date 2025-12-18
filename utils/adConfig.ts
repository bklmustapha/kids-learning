/**
 * AdMob Configuration - PRODUCTION
 * 
 * App ID: ca-app-pub-3002057065219882~5172338492
 * Banner Ad Unit: ca-app-pub-3002057065219882/3632666749
 * Interstitial Ad Unit: ca-app-pub-3002057065219882/5101661081
 */

// Production Ad Unit IDs
// Ad Unit IDs have a SLASH (/), App IDs have a TILDE (~)
export const AD_UNIT_IDS = {
  // Production ad unit IDs
  BANNER_ANDROID: 'ca-app-pub-3002057065219882/3632666749',
  BANNER_IOS: 'ca-app-pub-3002057065219882/3632666749',
  
  INTERSTITIAL_ANDROID: 'ca-app-pub-3002057065219882/5101661081',
  INTERSTITIAL_IOS: 'ca-app-pub-3002057065219882/5101661081',
};

// Platform-specific ad unit IDs
import { Platform } from 'react-native';

export const getBannerAdUnitId = () => {
  return Platform.OS === 'ios' ? AD_UNIT_IDS.BANNER_IOS : AD_UNIT_IDS.BANNER_ANDROID;
};

export const getInterstitialAdUnitId = () => {
  return Platform.OS === 'ios' ? AD_UNIT_IDS.INTERSTITIAL_IOS : AD_UNIT_IDS.INTERSTITIAL_ANDROID;
};

// Ad display frequency settings
export const AD_SETTINGS = {
  // Show interstitial ad after every N level completions
  INTERSTITIAL_FREQUENCY: 2, // Show ad every 2 level completions
  
  // Minimum time between interstitial ads (in milliseconds)
  MIN_TIME_BETWEEN_ADS: 60000, // 1 minute
};

// Your App IDs (for app.json configuration)
// App IDs have a TILDE (~) - these go in app.json plugins config
export const APP_IDS = {
  ANDROID: 'ca-app-pub-3002057065219882~5172338492',
  IOS: 'ca-app-pub-3002057065219882~5172338492',
};

// Production ad units are now configured above
// App ID: ca-app-pub-3002057065219882~5172338492
// Banner: ca-app-pub-3002057065219882/3632666749
// Interstitial: ca-app-pub-3002057065219882/5101661081
