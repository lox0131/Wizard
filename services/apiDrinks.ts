import { drinks } from './apiConfig';

export async function getAllDrinks() {
  try {
    const response = await drinks.get('/search.php?s=');
    return response.data;
  } catch (error) {
    console.log(`Could not get all drinks: ${error}`);
  }
}

export async function getRandomDrinks() {
  try {
    const response = await drinks.get('/randomselection.php');
    return response.data;
  } catch (error) {
    console.log(`Could not get all meals: ${error}`);
  }
}