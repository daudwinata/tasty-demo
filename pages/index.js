import HomepageSlider from '../components/banner-slider/homepage-slider.js';
import Menu from '../components/menu/menu.js';
import Rewards from '../components/rewards/rewards.js';
import Coupon from '../components/coupon/coupon.js';
import NewsUpdate from '../components/news-update/news-update.js';
import JoinTasty from '../components/join-tasty/join-tasty.js';
import Footer from '../components/footer/footer.js';

function HomePage() {
  return (
    <>
      <Menu/>
      <HomepageSlider/>
      <Rewards/>
      <Coupon/>
      <NewsUpdate/>
      <JoinTasty/>
      <Footer/>
    </>
  )
}

export default HomePage;