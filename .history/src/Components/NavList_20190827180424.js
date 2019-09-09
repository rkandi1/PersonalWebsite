import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const NavigationBar = (props) => {
  return (
    <div>
      <p><strong>Rohan Kandi</strong></p>
      <strong>Programmer</strong>
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