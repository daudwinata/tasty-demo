import React, { useState } from 'react';
import RecipeMenus from './recipe-menu.js';
import RecipeCategories from './recipe-categories.js';
import RecipeData from '../../data-recipe';

const allCategories = ['all', ... new Set(RecipeData.map((test) => test.category))];
console.log(allCategories);

function Recipe () {
  const [menuItems, setMenuItems] = useState(RecipeData);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(RecipeData);
      return;
    }

    const newItems = RecipeData.filter((anyName) => anyName.category === category);
    setMenuItems(newItems);
  }

  return (
    <div className="filter-main-wrapper">
        <div className="filter-recipe-title">
            <h1>
              Meal Time Recipes
            </h1>
            <p>
              Whether you’re cooking for a crowd or satisfying your hunger, we’ve got the perfect recipes for every meal.
            </p>
        </div>

        <RecipeCategories itemsProp={menuItems} categories={categories} filterItems={filterItems} />
        
        <RecipeMenus itemsProp={menuItems} />
    </div>
  )
}

export default Recipe;