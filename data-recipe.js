const RecipeData = [
    {
        id: 1,
        image: './images/recipe/bean-cheese.jpg',
        category: "Dish Type Recipes"
    },
    {
        id: 2,
        image: './images/recipe/cinnamon-apple.jpg',
        category: "Holiday & Special Occasion Recipes"
    },
    {
        id: 3,
        image: './images/recipe/bean-cheese.jpg',
        category: "Meal Time Recipes"
    },
    {
        id: 4,
        image: './images/recipe/dessert.jpg',
        category: "Snack Recipes"
    },
    {
        id: 5,
        image: './images/recipe/dorito-cheese.jpg',
        category: "Dish Type Recipes"
    },
    {
        id: 6,
        image: './images/recipe/meat.jpg',
        category: "Holiday & Special Occasion Recipes"
    },
    {
        id: 7,
        image: './images/recipe/bean-cheese.jpg',
        category: "Meal Time Recipes"
    },

    {
        id: 8,
        image: './images/recipe/snack.jpg',
        category: "Snack Recipes"
    },
    {
        id: 9,
        image: './images/recipe/meat.jpg',
        category: "Snack Recipes"
    },
    {
        id: 10,
        image: './images/recipe/meat.jpg',
        category: "Dish Type Recipes"
    },
    {
        id: 11,
        image: './images/recipe/meat.jpg',
        category: "Holiday & Special Occasion Recipes"
    },
    {
        id: 12,
        image: './images/recipe/bean-cheese.jpg',
        category: "Meal Time Recipes"
    },
    {
        id: 13,
        image: './images/recipe/bean-cheese.jpg',
        category: "Meal Time Recipes"
    },
];

export default RecipeData;


export function getEventById(id) {
  return RecipeData.find((event) => event.id === id);
}