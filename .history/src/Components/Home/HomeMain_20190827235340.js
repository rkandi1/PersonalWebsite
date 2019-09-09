import React from 'react';
import { Link } from 'react-router-dom';

import NavList from '../NavList';

const NameOnScreen = () => {
  return(
    <div>
      <h2 className={'name-on-screen'}>{'Rohan Kandi'}</h2>
      <Link to={'/About'}>{'About Me'} ></Link>
    </div>
  )
};

const HomeMainPage = (props) => {
  return (
    <div className={'root--mainpage'}>
      <NavList />
      <div className={'home--content'}>
        <NameOnScreen />
      </div>
    </div>
  );
};

export default HomeMainPage;