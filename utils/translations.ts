// Translation helper for level titles and item names
import type { Language } from '@/contexts/LanguageContext';

const levelTitleTranslations: Record<string, Record<Language, string>> = {
  'animals-1': { en: 'Farm Animals', fr: 'Animaux de la ferme', ar: 'حيوانات المزرعة' },
  'animals-2': { en: 'Wild Animals', fr: 'Animaux sauvages', ar: 'الحيوانات البرية' },
  'numbers-1': { en: 'Numbers 1-5', fr: 'Nombres 1-5', ar: 'الأرقام 1-5' },
  'colors-1': { en: 'Basic Colors', fr: 'Couleurs de base', ar: 'الألوان الأساسية' },
  'colors-2': { en: 'More Colors', fr: 'Plus de couleurs', ar: 'المزيد من الألوان' },
  'shapes-1': { en: 'Basic Shapes', fr: 'Formes de base', ar: 'الأشكال الأساسية' },
  'shapes-2': { en: 'More Shapes', fr: 'Plus de formes', ar: 'المزيد من الأشكال' },
  'countries-1': { en: 'Countries', fr: 'Pays', ar: 'الدول' },
  'fruits-1': { en: 'Fruits & Vegetables', fr: 'Fruits et légumes', ar: 'الفواكه والخضروات' },
  'sports-1': { en: 'Sports', fr: 'Sports', ar: 'الرياضات' },
  'vehicles-1': { en: 'Vehicles', fr: 'Véhicules', ar: 'المركبات' },
};

const itemNameTranslations: Record<string, Record<Language, string>> = {
  // Numbers
  '1': { en: 'One', fr: 'Un', ar: 'واحد' },
  '2': { en: 'Two', fr: 'Deux', ar: 'اثنان' },
  '3': { en: 'Three', fr: 'Trois', ar: 'ثلاثة' },
  '4': { en: 'Four', fr: 'Quatre', ar: 'أربعة' },
  '5': { en: 'Five', fr: 'Cinq', ar: 'خمسة' },
  // Animals - Farm
  'cow': { en: 'Cow', fr: 'Vache', ar: 'بقرة' },
  'chicken': { en: 'Chicken', fr: 'Poulet', ar: 'دجاجة' },
  'sheep': { en: 'Sheep', fr: 'Mouton', ar: 'خروف' },
  'horse': { en: 'Horse', fr: 'Cheval', ar: 'حصان' },
  'duck': { en: 'Duck', fr: 'Canard', ar: 'بطة' },
  'goat': { en: 'Goat', fr: 'Chèvre', ar: 'ماعز' },
  'rabbit': { en: 'Rabbit', fr: 'Lapin', ar: 'أرنب' },
  'donkey': { en: 'Donkey', fr: 'Âne', ar: 'حمار' },
  'rooster': { en: 'Rooster', fr: 'Coq', ar: 'ديك' },
  // Animals - Wild
  'lion': { en: 'Lion', fr: 'Lion', ar: 'أسد' },
  'elephant': { en: 'Elephant', fr: 'Éléphant', ar: 'فيل' },
  'tiger': { en: 'Tiger', fr: 'Tigre', ar: 'نمر' },
  'bear': { en: 'Bear', fr: 'Ours', ar: 'دب' },
  'monkey': { en: 'Monkey', fr: 'Singe', ar: 'قرد' },
  'giraffe': { en: 'Giraffe', fr: 'Girafe', ar: 'زرافة' },
  'zebra': { en: 'Zebra', fr: 'Zèbre', ar: 'حمار وحشي' },
  'wolf': { en: 'Wolf', fr: 'Loup', ar: 'ذئب' },
  'fox': { en: 'Fox', fr: 'Renard', ar: 'ثعلب' },
  'panda': { en: 'Panda', fr: 'Panda', ar: 'باندا' },
  // Colors - Basic
  'red': { en: 'Red', fr: 'Rouge', ar: 'أحمر' },
  'blue': { en: 'Blue', fr: 'Bleu', ar: 'أزرق' },
  'yellow': { en: 'Yellow', fr: 'Jaune', ar: 'أصفر' },
  'green': { en: 'Green', fr: 'Vert', ar: 'أخضر' },
  'orange': { en: 'Orange', fr: 'Orange', ar: 'برتقالي' },
  // Colors - More
  'purple': { en: 'Purple', fr: 'Violet', ar: 'بنفسجي' },
  'pink': { en: 'Pink', fr: 'Rose', ar: 'وردي' },
  'brown': { en: 'Brown', fr: 'Marron', ar: 'بني' },
  'black': { en: 'Black', fr: 'Noir', ar: 'أسود' },
  'white': { en: 'White', fr: 'Blanc', ar: 'أبيض' },
  'gray': { en: 'Gray', fr: 'Gris', ar: 'رمادي' },
  // Shapes
  'circle': { en: 'Circle', fr: 'Cercle', ar: 'دائرة' },
  'square': { en: 'Square', fr: 'Carré', ar: 'مربع' },
  'triangle': { en: 'Triangle', fr: 'Triangle', ar: 'مثلث' },
  'rectangle': { en: 'Rectangle', fr: 'Rectangle', ar: 'مستطيل' },
  'star': { en: 'Star', fr: 'Étoile', ar: 'نجمة' },
  // Shapes - More
  'oval': { en: 'Oval', fr: 'Ovale', ar: 'بيضاوي' },
  'diamond': { en: 'Diamond', fr: 'Losange', ar: 'معين' },
  'heart': { en: 'Heart', fr: 'Cœur', ar: 'قلب' },
  'hexagon': { en: 'Hexagon', fr: 'Hexagone', ar: 'سداسي' },
  'pentagon': { en: 'Pentagon', fr: 'Pentagone', ar: 'خماسي' },
  // Countries
  'france': { en: 'France', fr: 'France', ar: 'فرنسا' },
  'usa': { en: 'USA', fr: 'États-Unis', ar: 'الولايات المتحدة' },
  'uk': { en: 'UK', fr: 'Royaume-Uni', ar: 'المملكة المتحدة' },
  'japan': { en: 'Japan', fr: 'Japon', ar: 'اليابان' },
  'brazil': { en: 'Brazil', fr: 'Brésil', ar: 'البرازيل' },
  'egypt': { en: 'Egypt', fr: 'Égypte', ar: 'مصر' },
  // Fruits & Vegetables
  'apple': { en: 'Apple', fr: 'Pomme', ar: 'تفاحة' },
  'banana': { en: 'Banana', fr: 'Banane', ar: 'موزة' },
  'orange-fruit': { en: 'Orange', fr: 'Orange', ar: 'برتقال' },
  'carrot': { en: 'Carrot', fr: 'Carotte', ar: 'جزر' },
  'tomato': { en: 'Tomato', fr: 'Tomate', ar: 'طماطم' },
  'broccoli': { en: 'Broccoli', fr: 'Brocoli', ar: 'بروكلي' },
  // Sports
  'football': { en: 'Football', fr: 'Football', ar: 'كرة القدم' },
  'basketball': { en: 'Basketball', fr: 'Basketball', ar: 'كرة السلة' },
  'tennis': { en: 'Tennis', fr: 'Tennis', ar: 'تنس' },
  'swimming': { en: 'Swimming', fr: 'Natation', ar: 'سباحة' },
  'cycling': { en: 'Cycling', fr: 'Cyclisme', ar: 'ركوب الدراجات' },
  'running': { en: 'Running', fr: 'Course', ar: 'جري' },
  // Vehicles
  'car': { en: 'Car', fr: 'Voiture', ar: 'سيارة' },
  'bus': { en: 'Bus', fr: 'Bus', ar: 'حافلة' },
  'train': { en: 'Train', fr: 'Train', ar: 'قطار' },
  'airplane': { en: 'Airplane', fr: 'Avion', ar: 'طائرة' },
  'boat': { en: 'Boat', fr: 'Bateau', ar: 'قارب' },
  'bicycle': { en: 'Bicycle', fr: 'Vélo', ar: 'دراجة' },
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

