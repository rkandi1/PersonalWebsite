import React from 'react';

import NavList from '../NavList';
import Footer from '../Footer';

import AboutPicture from '../../../Assets/AboutImage.jpg'

const AboutMainPage = (props) => {
  const description = [];
  description.push('Hi, I’m Rohan. I’m currently pursuing a major in Computer Science and minors in business studies and mathematics at New York University graduating January of 2021. I have a strong interest in data science and application development, and using these concepts creatively to create new business concepts. I enjoy reading, running and planning events, and I am an avid soccer, tennis, football and basketball fan.');

  return (
    <div className={'root--mainpage'}>
      <NavList />
      <div className={'root--content'}>
        <h4 className={'about--title'}>{'About Me'}</h4>
        <div className={'my-image'}>
          <img 
              alt={'My Picture'}
              src={AboutPicture}
              width={100%} 
          />
        </div>
        <div className={'description-container'}>
          {description.map((para, index) => (<p className={'my-description'} key={index}>{para}</p>))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutMainPage;
