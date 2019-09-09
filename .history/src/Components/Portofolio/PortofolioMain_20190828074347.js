import React from 'react';

import NavList from '../NavList';

const PortofolioMainPage = (props) => {
  return(
    <div className={'root--mainpage'}>
      <NavList />
      <div className={'root--content'}>
      </div>
    </div>
  );
};

export default PortofolioMainPage;