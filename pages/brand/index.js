import Menu from '../../components/menu/menu.js';
import HomepageSlider from '../../components/banner-slider/homepage-slider.js';
import Brand from '../../components/brand/brand.js';
import Coupon from '../../components/coupon/coupon.js';
import JoinTasty from '../../components/join-tasty/join-tasty.js';
import Footer from '../../components/footer/footer.js';

function RecipePage(){
    return(
    <>
        <Menu/>
        <HomepageSlider/>
        <Brand/>
        <Coupon/>
        <JoinTasty/>
        <Footer/>
    </>
    )
}

export default RecipePage;