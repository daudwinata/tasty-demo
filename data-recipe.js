const RecipeData = [
    {
        id: 1,
        image: './images/recipe/classic-meatloaf.jpg',
        category: "Dish Type Recipes",
        title: "Classic Meatloaf",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        image: './images/recipe/cinnamon-apple.jpg',
        category: "Holiday & Special Occasion Recipes",
        title: "Cinnamon Apple Crumble",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        image: './images/recipe/bean-cheese.jpg',
        category: "Meal Time Recipes",
        title: "Bean Cheese",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 4,
        image: './images/recipe/fresh-startmuffins.jpg',
        category: "Snack Recipes",
        title: "Fresh Start Muffins",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 5,
        image: './images/recipe/paranormal-bites.jpg',
        category: "Dish Type Recipes",
        title: "Paranormal Bites",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 6,
        image: './images/recipe/cool-greek-style-nachos.jpg',
        category: "Holiday & Special Occasion Recipes",
        title: "Cool Greek Style Nachos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 7,
        image: './images/recipe/tortilla-crusted-chicken-wings.jpg',
        category: "Meal Time Recipes",
        title: "Tortilla Crusted Chicken Wings.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

    {
        id: 8,
        image: './images/recipe/snack.jpg',
        category: "Snack Recipes",
        title: "snack",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 9,
        image: './images/recipe/salted-caramel-chocolate-bark.jpg',
        category: "Snack Recipes",
        title: "Salted Caramel Chocolate Bark",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 10,
        image: './images/recipe/cheeseburger-nachos.jpg',
        category: "Dish Type Recipes",
        title: "Cheeseburger Nachos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 11,
        image: './images/recipe/salted-caramel-chocolate-bark.jpg',
        category: "Holiday & Special Occasion Recipes",
        title: "Salted Caramel Chocolate Bark",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 12,
        image: './images/recipe/flaming-cheetos-corn.jpg',
        category: "Meal Time Recipes",
        title: "Flaming Cheetos Corn.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];

export default RecipeData;


export function getEventById(id) {
  return RecipeData.find((event) => event.id === id);
}