function Coupon () {

  return (
    <div className="coupon">
        <div className="couponContainer">
            <div className="couponDisplay">
                <div className="coupon--leftcol">
                    <img alt="Save $0.50" src="/images/coupon-doritos.jpg" />
                </div>
            </div>
            <div className="couponText">
                <h3>A BOLD offer!</h3>

                <a className="buttonRed" aria-label="Get My Coupon*" href="#">Get My Coupon*</a>
                <p className="couponDisclaimer">*Coupons available while quantities last</p>
            </div>
        </div>
    </div>
  )
}

export default Coupon;