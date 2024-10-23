document.getElementById('header').innerHTML = `
  <nav class="fixed top-0 left-0 right-0 bg-white shadow-lg">
    <div class="container mx-auto p-6 sm:px-20 flex justify-between items-center">
      <a href="index.html" class="text-2xl font-bold text-green-600">MealApp</a>
      
      <button id="menu-btn" class="block sm:hidden text-gray-800 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <ul id="menu" class="hidden sm:flex space-x-6">
        <li><a href="index.html" class="text-gray-800 hover:text-green-600">Home</a></li>
        <li><a href="category.html" class="text-gray-800 hover:text-green-600">Categories</a></li>
        <li><a href="category-detail.html" class="text-gray-800 hover:text-green-600">Ingredients</a></li>
        <li><a href="category-detail.html" class="text-gray-800 hover:text-green-600">Area</a></li>
      </ul>
    </div>

    <div id="mobile-menu" class="hidden sm:hidden">
      <ul class="flex flex-col gap-y-3  justify-center items-center bg-white px-6 pb-4">
        <li><a href="index.html" class="block text-gray-800 hover:text-green-600">Home</a></li>
        <li><a href="category.html" class="block text-gray-800 hover:text-green-600">Categories</a></li>
        <li><a href="category-detail.html" class="block text-gray-800 hover:text-green-600">Ingredients</a></li>
        <li><a href="category-detail.html" class="block text-gray-800 hover:text-green-600">Area</a></li>
      </ul>
    </div>
  </nav>
`;

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
