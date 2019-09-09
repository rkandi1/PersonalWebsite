import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { log } from '../utils/jsutils';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from 'react-reveal/Slide';

const NavigationHeader = () => {
  return (
    <Slide left>
      <div>
        <p className={'nav--title'}>{'Rohan Kandi'}</p>

        <p 
        className={classnames(
          'nav--title', 
          'nav--description-color'
        )}
        >{'Computer Science'}</p>
      </div>
    </Slide>
  );
}

const NavigationBar = (props) => {
  const [currentNavLink, setCurrentNavLink] = useState('Home');
  
  /**
   * @param {Object} match: Path information based on the data in the page.
   * @param {Object} location: Information about the URL.
   */
  const handleClick = (match: Object, location: Object) => {
    // log('[NavList] location: ', location);

    if (location.pathname === '/') {
      setCurrentNavLink('Home');
      return;
    }
    if (location.pathname === '/About') {
      setCurrentNavLink('About');
      return;
    }
    if (location.pathname === '/Portofolio') {
      setCurrentNavLink('Portofolio');
      return;
    }
  }

  return (
    <div
      className={'nav--root'}
    >
      <NavigationHeader />
      <Slide delay={100} left>
        <List>
          <NavLink
            className={'nav--listitem'}
            exact
            isActive={handleClick}
            to={'/'}
          >
            <ListItem >
              <span 
                className={currentNavLink === 'Home' ? 'nav--selected' : null}
              >
                {'Home'}
              </span>
            </ListItem>
          </NavLink>
          <NavLink
            className={'nav--listitem'}
            isActive={handleClick}
            to={'/About'}
          >
            <ListItem>
              <span 
                className={currentNavLink === 'About' ? 'nav--selected' : null}
              >
                {'About'}
              </span>
            </ListItem>
          </NavLink>
          <NavLink
            className={'nav--listitem'}
            isActive={handleClick}
            to={'/Portofolio'}
          >
            <ListItem>
              <span 
                className={currentNavLink === 'Portofolio' ? 'nav--selected' : null}
              >
                {'Portofolio'}
              </span>
            </ListItem>
          </NavLink>
          <br/>
          <a
            className={'nav--listitem'}
            href={'mailto:kandirohan1@gmail.com'}
          >
            <ListItem>
              <span>{'Email'}</span>
            </ListItem>
          </a>
        </List>
      </Slide>
    </div>
  );
};

export default NavigationBar;