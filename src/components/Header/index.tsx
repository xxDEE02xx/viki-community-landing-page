import React, { FC } from 'react';

import './Header.css';
import vikiLogo from '../../assets/viki-logo.svg';
import communityLogo from '../../assets/community-logo-small-en.svg';

const Header: FC = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <a href='#'>
            <img src={vikiLogo} alt='Rakuten Viki' />
          </a>
          <ul>
            <li />
            <li />
          </ul>
          <a href='#'>
            <img src={communityLogo} alt="community-logo" />
          </a>
        </div>
        <div className="navigation">
          <ul>
            <li><a href='#'>Perks</a></li>
            <li><a href='#'>Community Resources</a></li>
            <li><a href='#'>Discussions</a></li>
          </ul>
        </div>
        <div className="user-access">
          <a href='#'>Login</a>
          <button>Start your journey!</button>
        </div>
      </div>
    </nav>
  )
}

export default Header;