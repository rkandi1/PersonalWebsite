import React from 'react';
import classnames from 'classnames';

import NavList from '../NavList';

import FolderIcon from '@material-ui/icons/FolderOpen';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Tooltip from '@material-ui/core/Tooltip';

const PortofolioMainPage = (props) => {
  const GITHUB_URL='https://github.com/rkandi1';
  const LINKEDIN_URL='https://www.linkedin.com/in/rohan-kandi/';
  const RESUME_URL = 'https://drive.google.com/file/d/1wiSA85I_qmNNTQlbRMXYLsC2qYu7rbZt/view?usp=sharing';

  return(
    <div className={'root--mainpage'}>
      <NavList />
      <div className={'root--content'}>
        <Tooltip title={'GitHub'}>
          <a href={GITHUB_URL}>
            <FolderIcon className={'portofolio--icons'} />
          </a>
        </Tooltip>
        <Tooltip title={'Resume'}>
          <a href={RESUME_URL}>
            <FileCopyIcon className={'portofolio--icons'} />
          </a>
        </Tooltip>
        <Tooltip title={'LinkedIn'}>
          <a href={LINKEDIN_URL}>
            <HowToRegIcon className={'portofolio--icons'} />
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default PortofolioMainPage;