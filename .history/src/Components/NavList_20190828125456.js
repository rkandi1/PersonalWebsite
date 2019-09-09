import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { log } from '../utils/jsutils';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const NavigationHeader = () => {
  return (
    <div>
      <p className={'nav--title'}>{'Rohan Kandi'}</p>

      <p 
      className={classnames(
        'nav--title', 
        'nav--description-color'
      )}
      >{'Computer Science'}</p>
    </div>
  );
}

const NavigationBar = (props) => {
  const [currentNavLink, setCurrentNavLink] = useState('Home');

  return (
    <div
      className={'nav--root'}
    >
      <NavigationHeader />
      <List>
      {log('After Navigation Header')}
        <NavLink
          activeClassName={'nav--active-listitem'}
          className={'nav--listitem'}
          exact
          onClick={() => {
            log('[NavList] currentNavLink: ', currentNavLink);
            if (currentNavLink !== 'Home') {
              setCurrentNavLink('Home');
            }
          }}
          onClick={currentNavLink !== 'Home' ? setCurrentNavLink('Home') : null}
          to={'/'}
        >
          <ListItem >
            <span 
              className={currentNavLink === 'Home' ? 'nav--underline' : null}
            >
              {'Home'}
            </span>
          </ListItem>
        </NavLink>
        <NavLink
          activeClassName={'nav--active-listitem'}
          className={'nav--listitem'}
          onClick={currentNavLink !== 'About' ? setCurrentNavLink('About') : null}
          to={'/About'}
        >
          <ListItem>
            <span 
              className={currentNavLink === 'About' ? 'nav--underline' : null}
            >
              {'About'}
            </span>
          </ListItem>
        </NavLink>
        <NavLink
          activeClassName={'nav--active-listitem'}
          className={'nav--listitem'}
          onClick={currentNavLink !== 'Portofolio' ? setCurrentNavLink('Portofolio') : null}
          to={'/Portofolio'}
        >
          <ListItem>
            <span 
              className={currentNavLink === 'Portofolio' ? 'nav--underline' : null}
            >
              {'Portofolio'}
            </span>
          </ListItem>
        </NavLink>
        <a
          className={'nav--listitem'}
          href={'mailto:kandirohan1@gmail.com'}
        >
          <ListItem>{'Contact Me'}</ListItem>
        </a>
      </List>
    </div>
  );
};

export default NavigationBar;