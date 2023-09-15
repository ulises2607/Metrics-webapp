import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Assets/Styles/HomeCards.css'

const HomeCards = ({ item }) => (
  <div className='homeCard-container'>
    
    <h2>{item}</h2>
    <Link to={`/details/${item}`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
    </Link>
  </div>
);

HomeCards.propTypes = {
  item: PropTypes.string.isRequired,
};

export default HomeCards;
