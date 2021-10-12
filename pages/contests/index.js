import HomepageSlider from '../../components/banner-slider/homepage-slider.js';
import Contests from '../../components/contests/contests.js';
import Coupon from '../../components/coupon/coupon.js';
import JoinTasty from '../../components/join-tasty/join-tasty.js';
import Footer from '../../components/footer/footer.js';

function ContestPage(){
    return(
    <>
        <HomepageSlider/>
        <Contests/>

        <Coupon/>
        <JoinTasty/>
        <Footer/>
    </>
    )
}

export default ContestPage;