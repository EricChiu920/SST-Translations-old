import React from 'react';
import './Header.css';
import { Divider } from 'semantic-ui-react';

function Header() {
  return (
    <>
      <div className="headerBlock">
        <div className="headerName">
          <p>SST Translations</p>
        </div>
        <div className="headerContent">
          <p>Ongoing</p>
          <p>Teasers</p>
          <p>Contact</p>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default Header;
