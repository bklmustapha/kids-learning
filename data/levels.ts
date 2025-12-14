import { Level, Category } from '@/types';

export const levels: Level[] = [
  // Animals - Level 1
  {
    id: 'animals-1',
    category: 'animals',
    levelNumber: 1,
    title: 'Farm Animals',
    requiredStars: 0,
    unlocked: true,
    items: [
      { id: 'cow', name: 'Cow', pronunciation: 'cow' },
      { id: 'chicken', name: 'Chicken', pronunciation: 'chicken' },
      { id: 'sheep', name: 'Sheep', pronunciation: 'sheep' },
      { id: 'horse', name: 'Horse', pronunciation: 'horse' },
      { id: 'duck', name: 'Duck', pronunciation: 'duck' },
      { id: 'goat', name: 'Goat', pronunciation: 'goat' },
      { id: 'rabbit', name: 'Rabbit', pronunciation: 'rabbit' },
      { id: 'donkey', name: 'Donkey', pronunciation: 'donkey' },
      { id: 'rooster', name: 'Rooster', pronunciation: 'rooster' },
    ],
  },
  // Animals - Level 2
  {
    id: 'animals-2',
    category: 'animals',
    levelNumber: 2,
    title: 'Wild Animals',
    requiredStars: 3,
    unlocked: false,
    items: [
      { id: 'lion', name: 'Lion', pronunciation: 'lion' },
      { id: 'elephant', name: 'Elephant', pronunciation: 'elephant' },
      { id: 'tiger', name: 'Tiger', pronunciation: 'tiger' },
      { id: 'bear', name: 'Bear', pronunciation: 'bear' },
      { id: 'monkey', name: 'Monkey', pronunciation: 'monkey' },
      { id: 'giraffe', name: 'Giraffe', pronunciation: 'giraffe' },
      { id: 'zebra', name: 'Zebra', pronunciation: 'zebra' },
      { id: 'wolf', name: 'Wolf', pronunciation: 'wolf' },
      { id: 'fox', name: 'Fox', pronunciation: 'fox' },
      { id: 'panda', name: 'Panda', pronunciation: 'panda' },
    ],
  },
  // Numbers - Level 1
  {
    id: 'numbers-1',
    category: 'numbers',
    levelNumber: 1,
    title: 'Numbers 1-5',
    requiredStars: 0,
    unlocked: true,
    items: [
      { 
        id: '1', 
        name: 'One', 
        pronunciation: 'one', 
        sound: require('@/assets/numbers/en/1.mp3'),
        data: { number: 1, count: 1 } 
      },
      { 
        id: '2', 
        name: 'Two', 
        pronunciation: 'two', 
        sound: require('@/assets/numbers/en/2.mp3'),
        data: { number: 2, count: 2 } 
      },
      { 
        id: '3', 
        name: 'Three', 
        pronunciation: 'three', 
        sound: require('@/assets/numbers/en/3.mp3'),
        data: { number: 3, count: 3 } 
      },
      { 
        id: '4', 
        name: 'Four', 
        pronunciation: 'four', 
        sound: require('@/assets/numbers/en/4.mp3'),
        data: { number: 4, count: 4 } 
      },
      { 
        id: '5', 
        name: 'Five', 
        pronunciation: 'five', 
        sound: require('@/assets/numbers/en/5.mp3'),
        data: { number: 5, count: 5 } 
      },
    ],
  },
  // Colors - Level 1
  {
    id: 'colors-1',
    category: 'colors',
    levelNumber: 1,
    title: 'Basic Colors',
    requiredStars: 0,
    unlocked: true,
    items: [
      { id: 'red', name: 'Red', pronunciation: 'red', data: { color: '#FF0000' } },
      { id: 'blue', name: 'Blue', pronunciation: 'blue', data: { color: '#0000FF' } },
      { id: 'yellow', name: 'Yellow', pronunciation: 'yellow', data: { color: '#FFFF00' } },
      { id: 'green', name: 'Green', pronunciation: 'green', data: { color: '#00FF00' } },
      { id: 'orange', name: 'Orange', pronunciation: 'orange', data: { color: '#FFA500' } },
    ],
  },
  // Colors - Level 2
  {
    id: 'colors-2',
    category: 'colors',
    levelNumber: 2,
    title: 'More Colors',
    requiredStars: 3,
    unlocked: false,
    items: [
      { id: 'purple', name: 'Purple', pronunciation: 'purple', data: { color: '#800080' } },
      { id: 'pink', name: 'Pink', pronunciation: 'pink', data: { color: '#FFC0CB' } },
      { id: 'brown', name: 'Brown', pronunciation: 'brown', data: { color: '#A52A2A' } },
      { id: 'black', name: 'Black', pronunciation: 'black', data: { color: '#000000' } },
      { id: 'white', name: 'White', pronunciation: 'white', data: { color: '#FFFFFF' } },
      { id: 'gray', name: 'Gray', pronunciation: 'gray', data: { color: '#808080' } },
    ],
  },
  // Shapes - Level 1
  {
    id: 'shapes-1',
    category: 'shapes',
    levelNumber: 1,
    title: 'Basic Shapes',
    requiredStars: 0,
    unlocked: true,
    items: [
      { id: 'circle', name: 'Circle', pronunciation: 'circle', data: { shape: 'circle' } },
      { id: 'square', name: 'Square', pronunciation: 'square', data: { shape: 'square' } },
      { id: 'triangle', name: 'Triangle', pronunciation: 'triangle', data: { shape: 'triangle' } },
      { id: 'rectangle', name: 'Rectangle', pronunciation: 'rectangle', data: { shape: 'rectangle' } },
      { id: 'star', name: 'Star', pronunciation: 'star', data: { shape: 'star' } },
    ],
  },
  // Shapes - Level 2
  {
    id: 'shapes-2',
    category: 'shapes',
    levelNumber: 2,
    title: 'More Shapes',
    requiredStars: 3,
    unlocked: false,
    items: [
      { id: 'oval', name: 'Oval', pronunciation: 'oval', data: { shape: 'oval' } },
      { id: 'diamond', name: 'Diamond', pronunciation: 'diamond', data: { shape: 'diamond' } },
      { id: 'heart', name: 'Heart', pronunciation: 'heart', data: { shape: 'heart' } },
      { id: 'hexagon', name: 'Hexagon', pronunciation: 'hexagon', data: { shape: 'hexagon' } },
      { id: 'pentagon', name: 'Pentagon', pronunciation: 'pentagon', data: { shape: 'pentagon' } },
    ],
  },
  // Countries - Level 1
  {
    id: 'countries-1',
    category: 'countries',
    levelNumber: 1,
    title: 'Countries',
    requiredStars: 0,
    unlocked: true,
    items: [
      { id: 'france', name: 'France', pronunciation: 'france' },
      { id: 'usa', name: 'USA', pronunciation: 'usa' },
      { id: 'uk', name: 'UK', pronunciation: 'uk' },
      { id: 'japan', name: 'Japan', pronunciation: 'japan' },
      { id: 'brazil', name: 'Brazil', pronunciation: 'brazil' },
      { id: 'egypt', name: 'Egypt', pronunciation: 'egypt' },
    ],
  },
  // Fruits & Vegetables - Level 1
  {
    id: 'fruits-1',
    category: 'fruits',
    levelNumber: 1,
    title: 'Fruits & Vegetables',
    requiredStars: 0,
    unlocked: true,
    items: [
      { id: 'apple', name: 'Apple', pronunciation: 'apple' },
      { id: 'banana', name: 'Banana', pronunciation: 'banana' },
      { id: 'orange-fruit', name: 'Orange', pronunciation: 'orange' },
      { id: 'carrot', name: 'Carrot', pronunciation: 'carrot' },
      { id: 'tomato', name: 'Tomato', pronunciation: 'tomato' },
      { id: 'broccoli', name: 'Broccoli', pronunciation: 'broccoli' },
    ],
  },
  // Sports - Level 1
  {
    id: 'sports-1',
    category: 'sports',
    levelNumber: 1,
    title: 'Sports',
    requiredStars: 0,
    unlocked: true,
    items: [
      { id: 'football', name: 'Football', pronunciation: 'football' },
      { id: 'basketball', name: 'Basketball', pronunciation: 'basketball' },
      { id: 'tennis', name: 'Tennis', pronunciation: 'tennis' },
      { id: 'swimming', name: 'Swimming', pronunciation: 'swimming' },
      { id: 'cycling', name: 'Cycling', pronunciation: 'cycling' },
      { id: 'running', name: 'Running', pronunciation: 'running' },
    ],
  },
  // Vehicles - Level 1
  {
    id: 'vehicles-1',
    category: 'vehicles',
    levelNumber: 1,
    title: 'Vehicles',
    requiredStars: 0,
    unlocked: true,
    items: [
      { id: 'car', name: 'Car', pronunciation: 'car' },
      { id: 'bus', name: 'Bus', pronunciation: 'bus' },
      { id: 'train', name: 'Train', pronunciation: 'train' },
      { id: 'airplane', name: 'Airplane', pronunciation: 'airplane' },
      { id: 'boat', name: 'Boat', pronunciation: 'boat' },
      { id: 'bicycle', name: 'Bicycle', pronunciation: 'bicycle' },
    ],
  },
];

export const getLevelsByCategory = (category: Category): Level[] => {
  return levels.filter(level => level.category === category);
};

export const getLevelById = (id: string): Level | undefined => {
  return levels.find(level => level.id === id);
};

