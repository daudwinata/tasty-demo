// import RecipeData from './components/RecipeData';
// import RecipeMenus from './components/RecipeMenus';
// import RecipeCategories from './components/RecipeCategories';
import Recipe from '../../components/recipe/recipe.js';
import Coupon from '../../components/coupon/coupon.js';
import JoinTasty from '../../components/join-tasty/join-tasty.js';
import Footer from '../../components/footer/footer.js';

function RecipePage(){
    return(
    <>
        <Recipe/>
        <Coupon/>
        <JoinTasty/>
        <Footer/>
    </>
    )
}

export default RecipePage;