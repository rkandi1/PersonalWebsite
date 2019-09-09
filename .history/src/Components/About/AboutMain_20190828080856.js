import React from 'react';

import NavList from '../NavList';

const AboutMainPage = (props) => {
  return (
    <div className={'root--mainpage'}>
      <NavList />
      <div className={'root--content'}>
        <div >
          <h4 className={'about--title'}>{'About Me'}</h4>
        </div>
      </div>
    </div>
  );
};

export default AboutMainPage;
