import fs from 'fs';
import path from 'path';

export async function GET() {
  const imageDir = path.join(process.cwd(), 'public', 'uploads'); // Path to the folder
  const fileNames = fs.readdirSync(imageDir); // Read files

  const images = fileNames.map((fileName) => `/uploads/${fileName}`); // Generate URLs
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
      [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
    return array;
  }
  const shuffledArray = shuffleArray(images);
  return new Response(JSON.stringify(shuffledArray), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
