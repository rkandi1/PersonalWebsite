import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import Slide from '@material-ui/core/Slide';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import NavList from '../NavList';
import Footer from '../Footer';

const NameOnScreen = () => {
  return(
    <div>
      <h2 className={'name-on-screen'}>{'Rohan Kandi'}</h2>
      <Link 
        className={'link-to-about'}
        to={'/About'}
      >{'About Me'}<ArrowForwardIcon /> </Link>

    </div>
  )
};

const HomeMainPage = (props) => {
  return (
    <div>
      <div className={'root--mainpage'}>
        <NavList />
        <div className={classnames('root--content', 'home--content')}>
          {/* <Slide direction={'right'} in={true} mountOnEnter unmountOnExit> */}
          <NameOnScreen />
          {/* </Slide> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeMainPage;