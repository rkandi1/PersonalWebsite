import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Fade from 'react-reveal/Fade';

import NavList from '../NavList';

const NameOnScreen = () => {
  return(
    <div>
      <Fade bottom duration={1500}>
        <h2 className={'name-on-screen'}>{'Rohan Kandi'}</h2>
      </Fade>
      <Fade delay={1500} duration={1500}>
        <Link 
          className={'link-to-about'}
          to={'/About'}
        >{'About Me'} >
        </Link>
      </Fade>

    </div>
  )
};

const HomeMainPage = (props) => {
  return (
      <div className={'root--mainpage'}>
        <NavList isHome={true} />
        <div className={classnames('root--content', 'home--content')}>
          <NameOnScreen />
        </div>
      </div>
  );
};

export default HomeMainPage;