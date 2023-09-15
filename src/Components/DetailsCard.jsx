import React from 'react';
import { useDispatch, } from 'react-redux';
import { fetchDetail,showDetails } from '../Redux/Details/detailsSlice';

const DetailsCard = ({ name, imp_city, show, detail }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(showDetails(imp_city));
    dispatch(fetchDetail(imp_city));
  }

  return (
    <div className='detailCard-container'>
      <div className="card-name">
        <strong>{name}</strong>
        <span>{imp_city}</span>
      </div>
      <div className="button-container">
        <button type='button' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
        </button>
      </div>
      {show && detail && (
  <ul>
    {Object.entries(detail).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
  </ul>
)}

    </div>
  );
};

export default DetailsCard;
