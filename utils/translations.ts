// Translation helper for level titles and item names
import type { Language } from '@/contexts/LanguageContext';

const levelTitleTranslations: Record<string, Record<Language, string>> = {
  'animals-1': { en: 'Farm Animals', fr: 'Animaux de la ferme', ar: 'حيوانات المزرعة' },
  'animals-2': { en: 'Wild Animals', fr: 'Animaux sauvages', ar: 'الحيوانات البرية' },
  'letters-1': { en: 'Letters A-E', fr: 'Lettres A-E', ar: 'الحروف أ-ه' },
  'numbers-1': { en: 'Numbers 1-5', fr: 'Nombres 1-5', ar: 'الأرقام 1-5' },
  'colors-1': { en: 'Basic Colors', fr: 'Couleurs de base', ar: 'الألوان الأساسية' },
  'shapes-1': { en: 'Basic Shapes', fr: 'Formes de base', ar: 'الأشكال الأساسية' },
};

const itemNameTranslations: Record<string, Record<Language, string>> = {
  // Numbers
  '1': { en: 'One', fr: 'Un', ar: 'واحد' },
  '2': { en: 'Two', fr: 'Deux', ar: 'اثنان' },
  '3': { en: 'Three', fr: 'Trois', ar: 'ثلاثة' },
  '4': { en: 'Four', fr: 'Quatre', ar: 'أربعة' },
  '5': { en: 'Five', fr: 'Cinq', ar: 'خمسة' },
  // Animals
  'cow': { en: 'Cow', fr: 'Vache', ar: 'بقرة' },
  'pig': { en: 'Pig', fr: 'Cochon', ar: 'خنزير' },
  'chicken': { en: 'Chicken', fr: 'Poulet', ar: 'دجاجة' },
  'sheep': { en: 'Sheep', fr: 'Mouton', ar: 'خروف' },
  'horse': { en: 'Horse', fr: 'Cheval', ar: 'حصان' },
  'lion': { en: 'Lion', fr: 'Lion', ar: 'أسد' },
  'elephant': { en: 'Elephant', fr: 'Éléphant', ar: 'فيل' },
  'tiger': { en: 'Tiger', fr: 'Tigre', ar: 'نمر' },
  'bear': { en: 'Bear', fr: 'Ours', ar: 'دب' },
  'monkey': { en: 'Monkey', fr: 'Singe', ar: 'قرد' },
  // Colors
  'red': { en: 'Red', fr: 'Rouge', ar: 'أحمر' },
  'blue': { en: 'Blue', fr: 'Bleu', ar: 'أزرق' },
  'yellow': { en: 'Yellow', fr: 'Jaune', ar: 'أصفر' },
  'green': { en: 'Green', fr: 'Vert', ar: 'أخضر' },
  'orange': { en: 'Orange', fr: 'Orange', ar: 'برتقالي' },
  // Shapes
  'circle': { en: 'Circle', fr: 'Cercle', ar: 'دائرة' },
  'square': { en: 'Square', fr: 'Carré', ar: 'مربع' },
  'triangle': { en: 'Triangle', fr: 'Triangle', ar: 'مثلث' },
  'rectangle': { en: 'Rectangle', fr: 'Rectangle', ar: 'مستطيل' },
  'star': { en: 'Star', fr: 'Étoile', ar: 'نجمة' },
};

/**
 * Get translated level title
 */
export const getLevelTitle = (levelId: string, language: Language = 'en'): string => {
  return levelTitleTranslations[levelId]?.[language] || levelTitleTranslations[levelId]?.en || levelId;
};

/**
 * Get translated item name
 */
export const getItemName = (itemId: string, language: Language = 'en'): string => {
  return itemNameTranslations[itemId]?.[language] || itemNameTranslations[itemId]?.en || itemId;
};

