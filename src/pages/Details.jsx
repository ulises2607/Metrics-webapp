import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DetailsCard from '../Components/DetailsCard';

const Details = () => {
  const { country } = useParams();

  const cities = useSelector((state) => state.details.cities);

  return (
    <div className="details-container">
      <h2>{country}</h2>
      <ul>
        {cities.map((countryData) => {
          if (countryData.nombre === country) {
            return countryData.provinces.map((province) => (
              <li key={province.nombre}>
                <DetailsCard
                  name={province.nombre}
                  impCity={province.important_city}
                  show={province.show}
                  detail={province.detail}
                />
              </li>
            ));
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default Details;
