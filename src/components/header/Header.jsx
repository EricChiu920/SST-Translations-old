import React from 'react';
import './Header.css';
import { Divider } from 'semantic-ui-react';
import Teasers from './Teasers';

const Header = () => (
  <>
    <div className="headerBlock">
      <div className="headerName">
        <p>SST Translations</p>
      </div>
      <div className="headerContent">
        <p>Ongoing</p>
        <Teasers placeholder="Search Teasers" fluid search selection options={['a', 'b']} />
        <p>Contact</p>
      </div>
    </div>
    <Divider />
  </>
);

export default Header;
