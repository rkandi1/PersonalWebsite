import React from 'react';
import classnames from 'classnames';

import NavList from '../NavList';

import FolderIcon from '@material-ui/icons/Folder'; 

// Folder Icon => Github
// HowToReg Icon => LinkedIn
// FileCopy Icon => Resume

const PortofolioMainPage = (props) => {
  return(
    <div className={'root--mainpage'}>
      <NavList />
      <div className={'root--content'}>

      </div>
    </div>
  );
};

export default PortofolioMainPage;