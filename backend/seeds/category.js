// Import the mongoose library and your Category model
import Category from '../models/Category.js';
import connectToDB from '../config/connect.js'
import { MONGO_URI_REMOTE } from '../config/config.js';
// Define an array of category objects
const categories = [
  { name: 'Action and Adventure', description: 'Books that are filled with exciting and fast-paced action sequences.' },
  { name: 'Art', description: 'Books that explore various forms of art, including painting, sculpture, and photography.' },
  { name: 'Biography', description: 'Books that tell the life stories of real people, often written by another person.' },
  { name: 'Children', description: 'Books that are specifically written for children, typically with engaging stories and colorful illustrations.' },
  { name: 'Classics', description: 'Books that are widely considered to be of the highest quality and enduring value, often written by renowned authors.' },
  { name: 'Comics and Graphic Novels', description: 'Books that use sequential art to tell stories, including comic books and graphic novels.' },
  { name: 'Cookbooks', description: 'Books that contain recipes and instructions for cooking various dishes and cuisines.' },
  { name: 'Fantasy', description: 'Books that feature magical or supernatural elements, often set in imaginary worlds.' },
  { name: 'Health and Fitness', description: 'Books that provide information and advice on maintaining good physical and mental health.' },
  { name: 'History', description: 'Books that explore past events, people, and societies, often based on historical research and analysis.' },
  { name: 'Horror', description: 'Books that are designed to evoke fear and suspense in the reader, often featuring supernatural or macabre elements.' },
  { name: 'Humor', description: 'Books that are intended to be funny and entertaining, often through witty writing and clever observations.' },
  { name: 'Mystery', description: 'Books that involve the solving of a crime or puzzle, often featuring a detective or amateur sleuth.' },
  { name: 'Poetry', description: 'Books that contain poems, which are written works that express emotions, ideas, and experiences using language and imagery.' },
  { name: 'Religion and Spirituality', description: 'Books that explore religious beliefs, practices, and teachings, as well as spiritual experiences and insights.' },
  { name: 'Romance', description: 'Books that focus on romantic relationships and love stories, often with themes of passion, desire, and devotion.' },
  { name: 'Science', description: 'Books that explain scientific concepts and discoveries, often written for a general audience.' },
  { name: 'Self-Help', description: 'Books that offer advice and strategies for personal growth, self-improvement, and achieving success.' },
  { name: 'Sports and Outdoors', description: 'Books that cover sports-related topics, outdoor activities, and adventures.' },
  { name: 'Travel', description: 'Books that provide information and inspiration for travelers, including guidebooks, memoirs, and travelogues.' },
  // Add more categories as needed
];
// Connect to your MongoDB database
await connectToDB(MONGO_URI_REMOTE);

// Define a function to seed categories
const seedCategories = async () => {
  try {
    // Delete existing categories to avoid duplicates
    await Category.deleteMany({});
    const createdCategories = await Category.insertMany(categories);
    console.log('Categories seeded successfully:', createdCategories);
  } catch (error) {
    console.error('Error seeding categories:', error);
  }
};

// Seed the categories
seedCategories();
