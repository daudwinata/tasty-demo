const RecipeCategories = ({ itemsProp, categories, filterItems }) => {
    return (
        <div className="btn-container-wrapper">
            {categories.map((category, image, index) => {
                return(
                    <div className="btn-container" key={index} 
                            onClick={() => filterItems(category)}>
                        <img
                            className="filter-btn" 
                            
                            src="./images/recipe/bean-cheese.jpg"
                            alt={category}
                        />
                        
                        <p>{category}</p>
                    </div>
                );
            })}
        </div>



    )
}

export default RecipeCategories;