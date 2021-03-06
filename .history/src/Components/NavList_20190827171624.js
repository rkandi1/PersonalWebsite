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
      <Link></Link>
      <Link></Link>
      <ListItem>{'Portofolio'}</ListItem>
      <ListItem>{'Contact'}</ListItem>
    </List>
  );
};

export default NavigationBar;