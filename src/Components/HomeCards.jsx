import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomeCards = ({ item }) => (
  <div>
    <Link to={`/details/${item}`}>icon</Link>
    <h2>{item}</h2>
  </div>
);

HomeCards.propTypes = {
  item: PropTypes.string.isRequired,
};

export default HomeCards;
