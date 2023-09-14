import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../Redux/Details/detailsSlice';
import DetailsCard from '../Components/DetailsCard';

const Details = () => {
  const { country } = useParams();
  const dispatch = useDispatch();

  const cities = useSelector(state => state.details.cities);

  return (
    <div className='details-container'>
      <h2>{country}</h2>
      <ul>
        {cities.map(countryData => {
          if (countryData.nombre === country) {
            return countryData.provinces.map(province => (
              <li key={province.nombre}>
                <DetailsCard name={province.nombre} 
                imp_city={province.important_city}
                show = {province.show} 
                details={province.details}
                />
              </li>
            ));
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default Details;
