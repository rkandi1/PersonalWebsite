import React from 'react';
import classnames from 'classnames';

import NavList from '../NavList';

import FolderIcon from '@material-ui/icons/Folder';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Tooltip from '@material-ui/core/Tooltip';

// Folder Icon => Github
// HowToReg Icon => LinkedIn
// FileCopy Icon => Resume

const PortofolioMainPage = (props) => {
  return(
    <div className={'root--mainpage'}>
      <NavList />
      <div className={'root--content'}>
        <Tooltip title={'GitHub'}>
          <FolderIcon className={'portofolio--icons'} />
        </Tooltip>
        <Tooltip title={'Resume'}>
          <FileCopyIcon className={'portofolio--icons'} />
        </Tooltip>
        <Tooltip title={'LinkedIn'}>
          <HowToRegIcon className={'portofolio--icons'} />
        </Tooltip>
      </div>
    </div>
  );
};

export default PortofolioMainPage;