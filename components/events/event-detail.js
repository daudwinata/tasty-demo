function EventDetail(props) {

  return (
        <div className="recipe-detail-wrapper">
            <h1 className="recipe-detail-title">Fish sticks Breaded in Lay’s® Dill Pickle Flavoured Potato Chips</h1>
            <p className="recipe-detail-ads">
                Brought to you by
                <img src="/images/brands/lays.png" alt="Lay's logo"/>
            </p>

            <div className="recipe-detail-instruction">
                <p className="recipe-detail-cook-instruction">Instead of frozen, boxed fish sticks, give your family a treat with the homemade version. Make a batch of these tasty fish sticks in advance, freeze and reheat as needed. Or, enjoy these fun snacks the day you make them. Whether you dip yours in ketchup, tartar sauce or this homemade yogurt, honey mustard sauce, they are sure to be a crowd-pleaser. Use LAY’S Dill Pickle Flavoured Potato Chips to create a taste explosion the whole family will love.</p>

                <div className="recipe-detail-cook-instruction">
                    <div className="recipe-detail-cook-wrap">
                        <img src="/images/prep-time.png"/>
                        <p className="recipe-detail__icon-text">
                            Prep Time:<br/>
                            25 minutes
                        </p>
                    </div>

                    <div className="recipe-detail-cook-wrap">
                        <img src="/images/cook-time.png"/>
                        <p className="recipe-detail__icon-text">
                            Cook Time:<br/>
                            14 minutes
                        </p>
                    </div>

                    <div className="recipe-detail-cook-wrap">
                            <img src="/images/rating-stars.png"/>
                        <p className="recipe-detail__icon-text">
                            Rating:<br/>
                        </p>
                        <div className="recipe-detail__rate">
                            <input type="radio" id="star5" name="rate" value="5"/>
                            <label for="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4"/>
                            <label for="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3"/>
                            <label for="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2"/>
                            <label for="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1"/>
                            <label for="star1" title="text">1 star</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="recipe-detail__ingredients">
                <div className="recipe-detail__instructions">
                    <h3>
                    Ingredients:
                    </h3>
                    <p>
                    </p><p><strong>For the fish:</strong></p>

                    <ul>
                        <li>1 pound firm, white fish fillets</li>
                        <li>3 tablespoons of cornstarch</li>
                        <li>1 large egg</li>
                        <li>1 tablespoon of low-fat milk</li>
                        <li>3/4 cup of <a href="http://www.lays.ca/products/lays%C2%AE%C2%A0dill-pickle-potato-chips" target="_blank">LAY’S<sup>®</sup> Dill Pickle Flavoured Potato Chips</a></li>
                        <li>1 tablespoon of canola oil</li>
                    </ul>

                    <p><strong>For the dipping sauce:</strong></p>

                    <ul>
                        <li>3/4 cup of plain non-fat Greek yogurt</li>
                        <li>1 tablespoon of gluten-free Dijon mustard</li>
                        <li>2 teaspoons of honey</li>
                    </ul>

                        <p></p>
                </div>

                <div class="recipe-detail__instructions">
                    <h3>
                    How to make it:
                    </h3>
                    <p></p>
                    <ol>
                        <li>Preheat the oven to 230 degrees Celsius.</li>
                        <li>Pat the fish dry and cut it into 30 strips of 2 inches by 3/4 inches.</li>
                        <li>Arrange an assembly line with three large bowls to coat the fish.</li>
                        <li>Add cornstarch to the first bowl, whisk egg and milk in the second bowl, and add crushed potato chips in the third bowl.</li>
                        <li>Add half the fish strips to the first bowl and toss to coat.</li>
                        <li>Move the fish to the second bowl and again toss to coat.</li>
                        <li>Move the fish to the potato chip mixture and toss to coat one last time. Repeat with the remaining strips.</li>
                        <li>Line a baking sheet with aluminum foil and coat it with cooking spray.</li>
                        <li>Arrange the fish strips on the foil and bake for 12-14 minutes, turning the strips over halfway through the cooking process.</li>
                        <li>Whisk the yogurt, mustard and honey together in a small bowl for the dipping sauce.</li>
                    </ol>
                </div>
            </div>
        </div>
  );
}

export default EventDetail;
