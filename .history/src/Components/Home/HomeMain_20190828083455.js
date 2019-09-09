import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import NavList from '../NavList';

const NameOnScreen = () => {
  return(
    <div style={{}}>
      <h2 className={'name-on-screen'}>{'Rohan Kandi'}</h2>
      <Link 
        className={'link-to-about'}
        to={'/About'}
      >{'About Me'} ></Link>
    </div>
  )
};

const HomeMainPage = (props) => {
  return (
    <div className={classnames('root--mainpage', 'home--content')}>
      <NavList />
      <div className={'root--content'}>
        <NameOnScreen />
      </div>
    </div>
  );
};

export default HomeMainPage;