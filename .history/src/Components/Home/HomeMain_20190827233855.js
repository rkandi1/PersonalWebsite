import React from 'react';

import NavList from '../NavList';

const NameOnScreen = () => {
  return(
    <div>
      <h2 className={'name-on-screen'}>{'Rohan Kandi'}</h2>
      <a href={'/About'}>{'Learn More'} ></a>
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