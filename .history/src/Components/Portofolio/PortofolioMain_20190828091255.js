import React from 'react';
import classnames from 'classnames';

import NavList from '../NavList';

import FolderIcon from '@material-ui/icons/Folder';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import FileCopyIcon from '@material-ui/icons/FileCopy';

// Folder Icon => Github
// HowToReg Icon => LinkedIn
// FileCopy Icon => Resume

const PortofolioMainPage = (props) => {
  return(
    <div className={'root--mainpage'}>
      <NavList />
      <div className={'root--content'}>
        <FolderIcon />
        <HowToRegIcon />
        <FileCopyIcon />
      </div>
    </div>
  );
};

export default PortofolioMainPage;