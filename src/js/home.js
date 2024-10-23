const categoriesContainer = document.getElementById('categories');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

const apiUrl = 'https://www.themealdb.com/api/json/v1/1';

const fetchMealsByLetter = async (letter) => {
  try {
    const response = await axios.get(`${apiUrl}/search.php?f=${letter}`);
    const meals = response.data.meals;
    displayMeals(meals);
  } catch (error) {
    console.error('Error fetching meals:', error);
  }
};

const fetchMealsByName = async (name) => {
  try {
    const response = await axios.get(`${apiUrl}/search.php?s=${name}`);
    const meals = response.data.meals;
    displayMeals(meals);
  } catch (error) {
    console.error('Error fetching meals:', error);
  }
};

const displayMeals = (meals) => {
  categoriesContainer.innerHTML = ''; 
  if (meals) {
    meals.forEach(meal => {
      const mealCard = document.createElement('div');
      mealCard.className = 'w-80 bg-white p-5 rounded shadow-md text-center';
      
      mealCard.innerHTML = `
        <a href="meal-detail.html?mealId=${meal.idMeal}">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="object-cover rounded mb-2" />
          <h3 class="font-bold">${meal.strMeal}</h3>
        </a>
      `;
      
      categoriesContainer.appendChild(mealCard);
    });
  } else {
    categoriesContainer.innerHTML = '<p>No meals found.</p>';
  }
};

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    fetchMealsByName(searchTerm);
  }
});

fetchMealsByLetter('D');

