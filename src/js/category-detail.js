const urlParams = new URLSearchParams(window.location.search);
const categoryName = urlParams.get("category");

document.getElementById("category-name").textContent = categoryName;

const fetchMealsByCategory = async (category) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const meals = response.data.meals;

    const mealsContainer = document.getElementById("meals");
    mealsContainer.innerHTML = ""; 

    meals.forEach((meal) => {
      const mealCard = `
        <div class="bg-white  text-center rounded-lg shadow-lg p-4 w-80 flex flex-col justify-between">
        <div>
            <img
            src="${meal.strMealThumb}"
            alt="${meal.strMeal}"
            class="object-cover rounded-lg mb-4"
            loading="lazy"
          />
          <h3 class="text-xl font-bold text-gray-800">${meal.strMeal}</h3>

        </div>
        <a
            href="meal-detail.html?mealId=${meal.idMeal}"
            class="text-green-600 hover:underline mt-2 block "
          >
            View Details
          </a>
        </div>
      `;
      mealsContainer.innerHTML += mealCard;
    });
  } catch (error) {
    console.error("Error fetching meals:", error);
  }
};

fetchMealsByCategory(categoryName);
