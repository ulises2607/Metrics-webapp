import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDetail, showDetails } from '../Redux/Details/detailsSlice';
import '../Assets/Styles/DetailsCard.css';
import upArrow from '../Assets/Images/up-arrow.png';
import downArrow from '../Assets/Images/down-arrow.png';

const DetailsCard = ({
  name, impCity, show, detail,
}) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(showDetails(impCity));
    dispatch(fetchDetail(impCity));
  };

  return (
    <div className="detailCard-container">
      <div className="card-and-button">
        <div className="card-name">
          <strong>{name}</strong>
          <span className="dc-imp-city">{impCity}</span>
        </div>
        <div className="button-container">
          <button className="show-detail-btn" type="button" onClick={handleClick}>
            {show ? <img src={upArrow} alt="minus" className="arrow-icon" />
              : <img src={downArrow} alt="logo" className="arrow-icon" />}
          </button>
        </div>
      </div>

      {show && detail && (
      <ul className="show-detail-list">
        {Object.entries(detail).map(([key, value]) => (
          <li className="detail-element" key={key}>
            <strong>
              {key}
              :
            </strong>
            {' '}
            {value}
          </li>
        ))}
      </ul>
      )}

    </div>
  );
};

DetailsCard.propTypes = {
  name: PropTypes.string.isRequired,
  impCity: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  detail: PropTypes.objectOf(PropTypes.string),
};

DetailsCard.defaultProps = {
  detail: {},
};

export default DetailsCard;
