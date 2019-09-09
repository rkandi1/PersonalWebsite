import React from 'react';

import NavList from '../NavList';

import picture from '../../../Images/AboutPicture.jpg'

const AboutMainPage = (props) => {
  const description = 
    'Hi, I’m Rohan. I’m currently pursuing a major in Computer Science and minors in business studies and mathematics at New York University graduating January of 2021. I have a strong interest in data science and application development, and using these concepts creatively to create new business concepts. I enjoy reading, running and planning events, and I am an avid soccer, tennis, football and basketball fan.'

  return (
    <div className={'root--mainpage'}>
      <NavList />
      <div className={'root--content'}>
        <h4 className={'about--title'}>{'About Me'}</h4>
        <img src={logo} />
        <div className={'description-container'}>
          <p className={'my-description'}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMainPage;
