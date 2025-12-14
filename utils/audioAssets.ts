// Audio assets mapping for numbers by language
type Language = 'en' | 'fr' | 'ar';

// Import all number audio files
const numberAudios: Record<Language, Record<string, number>> = {
  en: {
    '1': require('@/assets/numbers/en/1.mp3'),
    '2': require('@/assets/numbers/en/2.mp3'),
    '3': require('@/assets/numbers/en/3.mp3'),
    '4': require('@/assets/numbers/en/4.mp3'),
    '5': require('@/assets/numbers/en/5.mp3'),
    '6': require('@/assets/numbers/en/6.mp3'),
  },
  fr: {
    '1': require('@/assets/numbers/fr/1.mp3'),
    '2': require('@/assets/numbers/fr/2.mp3'),
    '3': require('@/assets/numbers/fr/3.mp3'),
    '4': require('@/assets/numbers/fr/4.mp3'),
    '5': require('@/assets/numbers/fr/5.mp3'),
  },
  ar: {
    '1': require('@/assets/numbers/ar/1.mp3'),
    '2': require('@/assets/numbers/ar/2.mp3'),
    '3': require('@/assets/numbers/ar/3.mp3'),
    '4': require('@/assets/numbers/ar/4.mp3'),
    '5': require('@/assets/numbers/ar/5.mp3'),
  },
};

/**
 * Get the audio file for a number item based on language
 * @param itemId - The item ID (e.g., '1', '2', '3')
 * @param language - The current language ('en', 'fr', 'ar')
 * @returns The require() result (number) for the audio file, or undefined if not found
 */
export const getNumberAudio = (itemId: string, language: Language = 'en'): number | undefined => {
  return numberAudios[language]?.[itemId];
};

/**
 * Get audio file for any learning item based on category and language
 * @param itemId - The item ID
 * @param category - The category (e.g., 'numbers')
 * @param language - The current language
 * @returns The require() result (number) for the audio file, or undefined if not found
 */
export const getItemAudio = (
  itemId: string,
  category: string,
  language: Language = 'en'
): number | undefined => {
  if (category === 'numbers') {
    return getNumberAudio(itemId, language);
  }
  // Add other categories here as needed
  return undefined;
};

