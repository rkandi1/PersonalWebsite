import React from 'react';
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
          <ListItem>{'Home'}</ListItem>
        </NavLink>
        <NavLink
          activeClassName={'nav--active-listitem'}
          className={'nav--listitem'}
          to={'/About'}
        >
          <ListItem>{'About'}</ListItem>
        </NavLink>
        <NavLink
          className={'nav--listitem'}
          to={'/Portofolio'}
        >
          <ListItem>{'Portofolio'}</ListItem>
        </NavLink>
        <a
          activeClassName={'nav--active-listitem'}
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