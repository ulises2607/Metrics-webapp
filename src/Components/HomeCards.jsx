import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Assets/Styles/HomeCards.css';
import arg from '../Assets/Images/paises/IMG-20230915-WA0004.jpg';
import arrow from '../Assets/Images/arrow-right.png';

const HomeCards = ({ item, isDark }) => (
  <div className={`homeCard-container ${isDark ? 'dark' : 'light'}`}>
    <div className="info-card">
      <img className="location-img" src={arg} alt="GIF" />
      <h2>{item}</h2>
    </div>

    <Link to={`/details/${item}`}>

      <img className="arrow-img" src={arrow} alt="GIF" />
    </Link>
  </div>
);

HomeCards.propTypes = {
  item: PropTypes.string.isRequired,
  isDark: PropTypes.string.isRequired,
};

export default HomeCards;
