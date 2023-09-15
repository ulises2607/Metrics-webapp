import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDetail, showDetails } from '../Redux/Details/detailsSlice';

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
      <div className="card-name">
        <strong>{name}</strong>
        <span>{impCity}</span>
      </div>
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
      {show && detail && (
      <ul>
        {Object.entries(detail).map(([key, value]) => (
          <li key={key}>
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
  detail: PropTypes.object,
};

DetailsCard.defaultProps = {
  detail: {},
};

export default DetailsCard;
