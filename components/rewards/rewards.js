function Rewards (props) {
    return (
        <div className="claims">
            <h2>Bite into these Tasty Rewards!</h2>
            <p>Your source for the latest coupons, contests and rewards offered by your favourite Frito Lay<sup>®</sup> and Quaker<sup>®</sup> brands!</p>

            {/* <div class="arrow-section-general"></div> */}
            
            <div className="claimsRow">
                <div className="claimsBox">
                    <a href="/en-ca/coupons">
                        <img alt="coupon icons" src="./images/exclusive-coupons.png"/>
                    </a>
                    <p className="claimsBoxParagraph">Coupons &amp; offers</p>
                </div>

                <div className="claimsBox">
                    <a href="/en-ca/contests">
                        <img alt="contest icons" src="./images/members-only-contests.png"/>
                    </a>
                    <p className="claimsBoxParagraph">Latest contests &amp; giveaways</p>
                </div>

                <div className="claimsBox">
                    <a href="/en-ca/contests">
                        <img alt="surprise icons" src="./images/surprises-and-rewards.png"/>
                    </a>
                    <p className="claimsBoxParagraph">Fun surprises, exclusive<br/>
                    perks &amp; more!</p>
                </div>
            </div>
        </div>
    )
}

export default Rewards;