import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        setRecipes(response.data.meals || []);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipes();
  }, [search]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Recipe List</h1>
      <div className="mb-8 text-center">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-65 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{recipe.strMeal}</h2>
              <a
                href={recipe.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Recipe Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
