import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Assets/Styles/HomeCards.css';
import arrow from '../Assets/Images/arrow-circle-right.svg';
import peru from '../Assets/Images/PAISES/PERU-removebg-preview.png'

const HomeCards = ({ item, isDark }) => (
  <div className={`homeCard-container ${isDark ? 'dark' : 'light'}`}>
    <div className="info-card">
      <img src={peru} alt="" className='country-location' />
      <h2 className='title-card'>{item}</h2>
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
