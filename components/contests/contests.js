import Link from 'next/link';

function Contests () {

  return (
    <>
      <div className="contest-detail-wrapper">
          <h2>Tasty Rewards Contests</h2>
          <p>Here are the latest promotions and contests featured by Tasty Rewards</p>
          <div className="contest-block-wrap">
            <img alt="" src="/images/cheetos-contest.jpg" />
          
            <div className="contest__detail-view-about">
                <h3>Cheetos<sup>®</sup> Monster Masterpiece Contest</h3>
                
                <div className="contest__detail-about">
                    <p>Get crafty this Halloween! Enter for a chance to win<sup>†</sup> $1,000 for craft supplies to create your own spooky works of art inspired by Cheetos<sup>®</sup>!</p>
                </div>

                <Link href="/contests/quakerhockeyhungry">
                  <a className="buttonRed">View Contest</a>
                </Link>

                {/* <a class="buttonRed" href="#">
                    View Contest
                </a> */}
            </div>



      </div>
      </div>
      
    </>
  )
}

export default Contests;