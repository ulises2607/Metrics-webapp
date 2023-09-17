import React from 'react';
import PropTypes from 'prop-types';
import '../Assets/Styles/Header.css';
import homeIcon from '../Assets/Images/pngegg.png';

const Header = ({ title }) => (

  <div className="header-container">
    <div className="img-header-container">
      <img src={homeIcon} alt="logo" className="logo-header" />
    </div>
    <div className="title-header-container">
      <h1 className="title-header">{title}</h1>
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'South America air polution',
};

export default Header;
