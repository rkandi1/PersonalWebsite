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
          to={'/'}
        >
          <ListItem>{'Home'}</ListItem>
        </Link>
        <Link
          to={'/About'}
        >
          <ListItem>{'About'}</ListItem>
        </Link>
        <Link
          to={'/Portofolio'}
        >
          <ListItem>{'Portofolio'}</ListItem>
        </Link>
        <Link
          to={'/'}
        >
          <ListItem>{'Contact'}</ListItem>
        </Link>
      </List>
    </div>
  );
};

export default NavigationBar;