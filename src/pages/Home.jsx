import '../Assets/Styles/Home.css';
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Components/Header';
import HomeCards from '../Components/HomeCards';

const Home = () => {
  const { home } = useSelector((state) => state.home);
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="home-container">
        {home.map((item) => (
          <HomeCards key={item.nombre} item={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
