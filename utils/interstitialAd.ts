/**
 * Interstitial Ad Manager
 * Handles loading and showing interstitial ads at appropriate times
 */

import { Platform } from 'react-native';
import { getInterstitialAdUnitId, AD_SETTINGS } from './adConfig';

// Try to import the ad library
let MobileAds: any = null;
let InterstitialAd: any = null;
let isAdLibraryAvailable = false;

try {
  const googleMobileAds = require('react-native-google-mobile-ads');
  // Check if the native module is actually available
  if (googleMobileAds && googleMobileAds.MobileAds && googleMobileAds.InterstitialAd) {
    MobileAds = googleMobileAds.MobileAds;
    InterstitialAd = googleMobileAds.InterstitialAd;
    isAdLibraryAvailable = true;
  }
} catch (error) {
  // Library not available (e.g., in Expo Go or native module not linked)
  console.log('AdMob library not available - interstitial ads will be disabled');
  isAdLibraryAvailable = false;
}

class InterstitialAdManager {
  private interstitial: any = null;
  private adUnitId: string | null = null;
  private isInitialized: boolean = false;
  private lastAdShownTime: number = 0;
  private levelCompletionCount: number = 0;

  constructor() {
    this.initialize();
  }

  private async initialize() {
    if (!isAdLibraryAvailable || !MobileAds || !InterstitialAd) {
      return;
    }

    try {
      await MobileAds().initialize();
      this.adUnitId = getInterstitialAdUnitId();
      this.isInitialized = true;
      this.loadAd();
    } catch (error) {
      console.log('AdMob initialization error:', error);
      // Don't set initialized if there's an error
      this.isInitialized = false;
    }
  }

  private loadAd() {
    if (!this.isInitialized || !this.adUnitId || !InterstitialAd) {
      return;
    }

    try {
      this.interstitial = InterstitialAd.createForAdRequest(this.adUnitId, {
        requestNonPersonalizedAdsOnly: true, // COPPA compliance
      });

      // Set up event listeners
      this.interstitial.addAdEventListener('loaded', () => {
        console.log('Interstitial ad loaded');
      });

      this.interstitial.addAdEventListener('error', (error: any) => {
        console.log('Interstitial ad error:', error);
        // Try to load another ad after a delay
        setTimeout(() => this.loadAd(), 30000);
      });

      this.interstitial.addAdEventListener('closed', () => {
        console.log('Interstitial ad closed');
        // Load a new ad for next time
        this.loadAd();
      });

      // Load the ad
      this.interstitial.load();
    } catch (error) {
      console.log('Error loading interstitial ad:', error);
    }
  }

  /**
   * Check if we should show an ad based on frequency settings
   */
  private shouldShowAd(): boolean {
    if (!this.isInitialized || !this.interstitial) {
      return false;
    }

    // Check minimum time between ads
    const timeSinceLastAd = Date.now() - this.lastAdShownTime;
    if (timeSinceLastAd < AD_SETTINGS.MIN_TIME_BETWEEN_ADS) {
      return false;
    }

    // Check if ad is loaded
    if (!this.interstitial.loaded) {
      return false;
    }

    return true;
  }

  /**
   * Show interstitial ad after level completion
   * Returns true if ad was shown, false otherwise
   */
  showAdAfterLevelCompletion(): boolean {
    this.levelCompletionCount++;

    // Show ad based on frequency setting
    if (this.levelCompletionCount % AD_SETTINGS.INTERSTITIAL_FREQUENCY !== 0) {
      return false;
    }

    return this.showAd();
  }

  /**
   * Show interstitial ad after challenge completion
   */
  showAdAfterChallenge(): boolean {
    return this.showAd();
  }

  /**
   * Show the interstitial ad if available
   */
  private showAd(): boolean {
    if (!this.shouldShowAd()) {
      return false;
    }

    try {
      this.interstitial.show();
      this.lastAdShownTime = Date.now();
      return true;
    } catch (error) {
      console.log('Error showing interstitial ad:', error);
      return false;
    }
  }

  /**
   * Preload an ad (call this when you anticipate showing an ad soon)
   */
  preload() {
    if (!this.isInitialized) {
      this.initialize();
    } else if (!this.interstitial || !this.interstitial.loaded) {
      this.loadAd();
    }
  }
}

// Export singleton instance
export const interstitialAdManager = new InterstitialAdManager();

