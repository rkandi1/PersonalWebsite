import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import NavList from '../NavList';

import FolderIcon from '@material-ui/icons/Folder';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Tooltip from '@material-ui/core/Tooltip';

// Folder Icon => Github
// HowToReg Icon => LinkedIn
// FileCopy Icon => Resume

const PortofolioMainPage = (props) => {
  const GITHUB_URL='https://github.com/rkandi1';
  const LINKEDIN_URL='https://www.linkedin.com/in/rohan-kandi/';

  return(
    <div className={'root--mainpage'}>
      <NavList />
      <div className={'root--content'}>
        <Tooltip title={'GitHub'}>
          <Link to={GITHUB_URL}>
            <FolderIcon className={'portofolio--icons'} />
          </Link>
        </Tooltip>
        <Tooltip title={'Resume'}>
          <FileCopyIcon className={'portofolio--icons'} />
        </Tooltip>
        <Tooltip title={'LinkedIn'}>
          <Link to={GITHUB_URL}>
            <HowToRegIcon className={'portofolio--icons'} />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default PortofolioMainPage;