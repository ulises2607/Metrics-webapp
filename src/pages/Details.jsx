import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DetailsCard from '../Components/DetailsCard';
import Header from '../Components/Header';
import Search from '../Components/Search';
import '../Assets/Styles/Details.css';

const Details = () => {
  const { country } = useParams();

  const cities = useSelector((state) => state.details.cities);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="details-container">
      <Header title={country} />

      <div className="details-title">
        <h2>Provinces</h2>
      </div>

      <Search onSearch={handleSearch} />

      <ul className='province-list'>
        {cities.map((countryData) => {
          if (countryData.nombre === country) {
            return countryData.provinces
              .filter((province) => province.nombre
                .toLowerCase().includes(searchTerm.toLowerCase()))
              .map((province) => (
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
