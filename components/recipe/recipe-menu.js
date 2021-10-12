const RecipeMenus = ({ itemsProp }) => {
    return (
        <div className="filter-recipe-category">
            {itemsProp.map((menuItem) => {
                const { id, image, category, description, title } = menuItem;
                return (
                    <div className="filter-recipe-section" key={id} >
                        <div className="filter-background-zoom">
                            <img alt={category} key={id} src={image} />
                        </div>
                        <p>{title}</p>

                        <div className="recipe__review-wrapper">
                            <div className="recipe__star">
                                <img alt="clock" src="./images/star-icon.png" />
                                <span> 5/5</span>
                                <img alt="clock" src="./images/clock-icon.png" />
                                <span>30 - 45mins</span>
                            </div>

                        </div>

                        <p>{description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default RecipeMenus;