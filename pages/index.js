import HomepageSlider from '../components/banner-slider/homepage-slider.js';
import Rewards from '../components/rewards/rewards.js';
import Coupon from '../components/coupon/coupon.js';
import NewsUpdate from '../components/news-update/news-update.js';
import JoinTasty from '../components/join-tasty/join-tasty.js';
import Footer from '../components/footer/footer.js';
import {getFeaturedEvents} from '../helpers/api-util';

// import EventList from '../components/events/event-list';


function HomePage(props) {

  return (
    <div>
      {/* <EventList items={props.events}/> */}
      <HomepageSlider/>
      <Rewards/>
      <Coupon/>
      <NewsUpdate/>
      <JoinTasty/>
      <Footer/>
    </div>
  );
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();

  return{
    props: {
      events: featuredEvents
    }
  }
}

export default HomePage;