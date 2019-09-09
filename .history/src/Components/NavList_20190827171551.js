import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const NavigationBar = (props) => {
  return (
    <List>
      
      <ListItem>{'Home'}</ListItem>
      <ListItem>{'About'}</ListItem>
      <ListItem>{'Portofolio'}</ListItem>
      <ListItem>{'Contact'}</ListItem>
    </List>
  );
};

export default NavigationBar;