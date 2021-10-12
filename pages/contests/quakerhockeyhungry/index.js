import JoinTasty from '../../../components/join-tasty/join-tasty.js';
import Footer from '../../../components/footer/footer.js';

function Quakerhockeyhungry () {

  return (
    <div>
        <div className="quaker-hockey-banner">
            <img src="/images/quaker/Quaker-Hockey_Top-Banner.png" alt="hockey hungry logo tag"/>
                
            <div className="contest-banner-text">
                <h1>The puck is about to drop!</h1>
                <h2>Quaker® Hockey Hungry Contest! </h2>
                <br/>
                <span>COMING SOON: Quaker<sup>®</sup> and Hockey Canada<sup>®</sup> are teaming up to get Canadian households in the hockey spirit.<br/>
                All you’ll need to enter is the UPC from a participating Quaker<sup>®</sup> Instant Oatmeal product for a chance to win<sup>†</sup>.
                <br/><br/>
                Come back on September 27!</span>
            </div>

            <div class="hockey-logo">
                <img class="hockey-canada-banner-logo-img en" src="/images/quaker/hockey-logo.png" alt="Campbell logo"/>
            </div>
        </div>

        <div class="quaker-hockey-official-rules">
            <div class="quaker-hockey-official-wrap">
                † No purchase necessary. Open to Canadian residents only, age of majority or older. Mathematical skill-testing question required. Contest Period: September 27 at 12:00pm (noon) ET to December 5, 2021 at 11:59:59pm ET. Instant Prizes available: (i) 9,000 Free Product Coupons (ARV $5.99 each); (ii) 1,000 Quaker<sup>®</sup> Oatmeal Travelers (ARV $20 each). Grand Prizes available: (i) 10 Hockey Canada® Prize Packs (1 per week/ARV $1,500 each). Chances of winning: (i) Instant Prize, depend on when entry played; (ii) Grand Prize, depend on entries received. Max 1 UPC per day. Prizes diminish as awarded.
            </div>
        </div>

        <JoinTasty/>
        <Footer/>
    </div>
  )
}

export default Quakerhockeyhungry;