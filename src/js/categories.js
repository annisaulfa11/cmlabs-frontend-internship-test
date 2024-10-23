const categoriesContainer = document.getElementById('categories');

const fetchCategories = async () => {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    const categories = response.data.categories;
    displayCategories(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

const displayCategories = (categories) => {
  categoriesContainer.innerHTML = ''; 
  categories.forEach(category => {
    const categoryCard = document.createElement('div');
    categoryCard.className = 'w-80 bg-white p-5 rounded shadow-md text-center';
    categoryCard.innerHTML = `
      <img src="${category.strCategoryThumb}" alt="${category.strCategory}" class="w-full  object-cover rounded mb-4" />
      <h3 class="font-bold text-xl mb-2">${category.strCategory}</h3>
      <p class="text-gray-600">${category.strCategoryDescription.slice(0, 100)}...</p>
      <a href="category-detail.html?category=${category.strCategory}" class="text-green-600 mt-4 inline-block hover:underline">View More</a>
    `;
    categoriesContainer.appendChild(categoryCard);
  });
};

fetchCategories();

  