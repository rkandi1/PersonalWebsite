import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const NavigationBar = (props) => {
  return (
    <List>
      <Link>
        <ListItem>{'Home'}</ListItem>
      </Link>
      <Link>
        <ListItem>{'About'}</ListItem>
      </Link>
      <Link>
        <ListItem>{'Portofolio'}</ListItem>
      </Link>
      <Link>
        <ListItem>{'Contact'}</ListItem>
      </Link>
    </List>
  );
};

export default NavigationBar;