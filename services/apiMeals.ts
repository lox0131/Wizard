import { meals } from './apiConfig';

export async function getAllMeals() {
  try {
    const response = await meals.get('/search.php?s=');
    return response.data;
  } catch (error) {
    console.log(`Could not get all meals: ${error}`);
  }
}