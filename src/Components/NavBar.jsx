import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header>
    <nav>
      <ul>
        <li>
          {' '}
          <Link to="/">Home</Link>
        </li>
        <li><button type="button">Most views</button></li>
        <li><button type="button">micIcon</button></li>
        <li><button type="button">ConfIcon</button></li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
