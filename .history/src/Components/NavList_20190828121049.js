import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const NavigationBar = (props) => {
  return (
    <div
      className={'nav--root'}
    >
      <p className={'nav--title'}>Rohan Kandi</p>
      <p 
      className={classnames(
        'nav--title', 
        'nav--description-color'
      )}
      >{'Computer Science'}</p>
      <List>
        <Link
          activeClassName={'nav--active-listitem'}
          className={'nav--listitem'}
          to={'/'}
        >
          <ListItem>{'Home'}</ListItem>
        </Link>
        <Link
          activeClassName={'nav--active-listitem'}
          className={'nav--listitem'}
          to={'/About'}
        >
          <ListItem>{'About'}</ListItem>
        </Link>
        <Link
          activeClassName={'nav--active-listitem'}
          className={'nav--listitem'}
          to={'/Portofolio'}
        >
          <ListItem>{'Portofolio'}</ListItem>
        </Link>
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