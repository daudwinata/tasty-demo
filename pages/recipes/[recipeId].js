
import HomepageSlider from '../../components/banner-slider/homepage-slider.js';
import Coupon from '../../components/coupon/coupon.js';
import EventDetail from '../../components/events/event-detail.js';
import JoinTasty from '../../components/join-tasty/join-tasty.js';
import Footer from '../../components/footer/footer.js';

import {Fragment} from 'React';

import {useRouter} from 'next/router';
import { getEventById } from '../../data-recipe.js';

function RecipeDetailPage(){
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if(!event){
        return <p>No recipe found!</p>
    }

    return(
        <Fragment>
            <HomepageSlider/>  
            <EventDetail/>
            <Coupon/>
            <JoinTasty/>
            <Footer/>
        </Fragment>
    )
}

export default RecipeDetailPage;