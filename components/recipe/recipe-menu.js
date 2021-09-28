const RecipeMenus = ({ itemsProp }) => {
    return (
        <div className="filter-recipe-category">
            {itemsProp.map((menuItem) => {
                const { id, image, category } = menuItem;
                return (
                    <div className="filter-recipe-section" key={id} >
                        <div className="filter-background-zoom">
                            <img alt={category} key={id} src={image} />
                        </div>
                        <p>{category}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default RecipeMenus;