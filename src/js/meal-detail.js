const urlParams = new URLSearchParams(window.location.search);
const mealId = urlParams.get('mealId');

if (mealId) {
  const mealDetailUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  axios.get(mealDetailUrl)
    .then(response => {
      const meal = response.data.meals[0];

      document.getElementById('meal-title').textContent = meal.strMeal;
      document.getElementById('meal-category').textContent = `Category: ${meal.strCategory}`;
      document.getElementById('meal-area').textContent = `Area: ${meal.strArea}`;
      document.getElementById('meal-instructions').textContent = meal.strInstructions;
      document.getElementById('meal-image').src = meal.strMealThumb;

      const ingredientsList = document.getElementById('meal-ingredients');
      ingredientsList.innerHTML = '';
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient) {
          const listItem = document.createElement('li');
          listItem.textContent = `${ingredient} - ${measure}`;
          ingredientsList.appendChild(listItem);
        }
      }

      if (meal.strYoutube) {
        const videoId = meal.strYoutube.split('v=')[1]; 
        const videoSrc = `https://www.youtube.com/embed/${videoId}`;
        document.getElementById('meal-video').src = videoSrc;
      } else {
        document.getElementById('meal-video').style.display = 'none'; 
      }
    })
    .catch(error => {
      console.error('Error fetching meal details:', error);
    });
} else {
  console.error('No meal ID found in the URL');
}
