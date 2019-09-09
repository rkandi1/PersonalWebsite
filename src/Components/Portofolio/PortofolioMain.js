import React from 'react';
import classnames from 'classnames';

import NavList from '../NavList';

import FolderIcon from '@material-ui/icons/FolderOpen';
import HowToRegIcon from '@material-ui/icons/HowToRegOutlined';
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from 'react-reveal/Zoom';

const PortofolioMainPage = (props) => {
  const GITHUB_URL='https://github.com/rkandi1';
  const LINKEDIN_URL='https://www.linkedin.com/in/rohan-kandi/';
  const RESUME_URL = 'https://drive.google.com/file/d/1wiSA85I_qmNNTQlbRMXYLsC2qYu7rbZt/view?usp=sharing';

  return(
    <div className={'root--mainpage'}>
      <NavList isHome={false} />
      <div className={classnames('root--content', 'portofolio--content')}>
        <Zoom>
          <Tooltip title={'GitHub'}>
            <a href={GITHUB_URL}>
              <FolderIcon className={'portofolio--icons'} />
            </a>
          </Tooltip>
        </Zoom>
        <Zoom delay={500}>
          <Tooltip title={'Resume'}>
            <a href={RESUME_URL}>
              <DescriptionIcon className={'portofolio--icons'} />
            </a>
          </Tooltip>
        </Zoom>
        <Zoom delay={1000}>
          <Tooltip title={'LinkedIn'}>
            <a href={LINKEDIN_URL}>
              <HowToRegIcon className={'portofolio--icons'} />
            </a>
          </Tooltip>
        </Zoom>
      </div>
    </div>
  );
};

export default PortofolioMainPage;