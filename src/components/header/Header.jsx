import React from 'react';
import './Header.css';
import { Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Teasers from './Teasers';

const Header = () => (
  <>
    <div className="headerBlock">
      <div className="headerName">
        <p><Link to="/">SST</Link></p>
      </div>
      <div className="headerContent">
        <p>Ongoing</p>
        <Teasers />
        <Link to="/contact">Contact</Link>
      </div>
    </div>
    <Divider />
  </>
);

export default Header;
