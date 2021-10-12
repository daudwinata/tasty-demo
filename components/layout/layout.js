import { Fragment } from 'react';

import Menu from './menu.js';

function Layout(props) {
  return (
    <Fragment>
      <Menu />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
