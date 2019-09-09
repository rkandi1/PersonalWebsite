import React from 'react';

import NavList from '../NavList';

const AboutMainPage = (props) => {
  return (
    <div className={'root--mainpage'}>
      <NavList />
      <div className={'root--content'}>
        <h4 className={'about--title'}>{'About Me'}</h4>
        <div className={'paragraph--container'}>
          <p>{'This is just a test line I want to write to check the validity of this para.This is just a test line I want to write to check the validity of this para.This is just a test line I want to write to check the validity of this para.This is just a test line I want to write to check the validity of this para.'}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMainPage;
