import Link from 'next/link';
import classes from './menu.module.css';

function Menu () {
    return (
    <div className={classes.navbarWrapper}>
      <div className={classes.navbar}>
        <Link href="/" passHref>
          <img src="/images/tasty-logo.png"/>
        </Link>
        <ul>
          <li>
            <Link href="/brands">Brands</Link>
          </li>

          <li>
            <Link href="/contests">Contests</Link>
          </li>
          
          <li>
            <Link href="/recipes">Recipes</Link>
          </li>
        </ul>
      </div>
    </div>
    )
}

export default Menu;