import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

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
        <NavLink
          activeClassName={'nav--active-listitem'}
          className={'nav--listitem'}
          exact
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
          // isActive={setCurrentNavLink('About')}
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
          // isActive={setCurrentNavLink('Portofolio')}
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