import { Audio } from 'expo-av';
import { getSettings } from './storage';

let soundEnabled = true;

export const initializeSoundManager = async () => {
  const settings = await getSettings();
  soundEnabled = settings.soundEnabled;
};

export const setSoundEnabled = (enabled: boolean) => {
  soundEnabled = enabled;
};

export const playSound = async (soundFile?: string | number, textToSpeak?: string): Promise<void> => {
  if (!soundEnabled) return;

  console.log("soundFile", soundFile)

  try {
    // Priority: play audio file if available
    if (soundFile) {
      let source;
      
      if (typeof soundFile === 'number') {
        // require() returns a number for local assets
        // expo-av can use the number directly
        source = soundFile;
      } else {
        // URI string for remote assets
        source = { uri: soundFile };
      }
      console.log("source", source)
      // load sound before playing
      const { sound } = await Audio.Sound.createAsync(
        source,
        { shouldPlay: true, volume: 1.0 }
      );
      
      // Wait for sound to finish before unloading
      await new Promise<void>((resolve) => {
        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.isLoaded && status.didJustFinish) {
            resolve();
          }
        });
        
        // Fallback timeout
        setTimeout(() => {
          resolve();
        }, 5000);
      });
      
      await sound.unloadAsync();
    } else if (textToSpeak) {
      // Only log if no audio file is available
      console.log('No audio file available for:', textToSpeak);
    }
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};

export const playSuccessSound = async (): Promise<void> => {
  if (!soundEnabled) return;
  // Play success sound effect
  console.log('Playing success sound');
};

export const playErrorSound = async (): Promise<void> => {
  if (!soundEnabled) return;
  // Play gentle error sound
  console.log('Playing error sound');
};

