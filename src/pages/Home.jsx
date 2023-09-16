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
      <div className="divider"></div>
      <div className="home-container">
        {home.map((item, index) => (
          <HomeCards 
          key={item.nombre} 
          item={item}
          isDark={index % 4 === 0 || index % 4 === 3} />
        ))}
      </div>
    </>
  );
};

export default Home;
