const categoriesContainer = document.getElementById('categories');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

const apiUrl = 'https://www.themealdb.com/api/json/v1/1';

// Function to fetch meals by first letter
const fetchMealsByLetter = async (letter) => {
  try {
    const response = await axios.get(`${apiUrl}/search.php?f=${letter}`);
    const meals = response.data.meals;
    displayMeals(meals);
  } catch (error) {
    console.error('Error fetching meals:', error);
  }
};

// Function to fetch meals by name
const fetchMealsByName = async (name) => {
  try {
    const response = await axios.get(`${apiUrl}/search.php?s=${name}`);
    const meals = response.data.meals;
    displayMeals(meals);
  } catch (error) {
    console.error('Error fetching meals:', error);
  }
};

// Function to display meals in the container
const displayMeals = (meals) => {
  categoriesContainer.innerHTML = ''; 
  if (meals) {
    meals.forEach(meal => {
      const mealCard = document.createElement('div');
      mealCard.className = 'w-80 bg-white p-5 rounded shadow-md text-center';
      
      // Create a link for the meal detail page using the meal ID
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

// Event listener for search
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    fetchMealsByName(searchTerm);
  }
});

// Fetch meals by letter A on load
fetchMealsByLetter('D');

// Optional: Uncomment the following line to fetch random meals on load instead
// fetchRandomMeal();
