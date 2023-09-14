import '../Assets/Styles/Home.css'
import React from 'react'
import Header from '../Components/Header'
import HomeCards from '../Components/HomeCards'
import { useSelector } from 'react-redux'

const Home = () => {
  const { home } =  useSelector(state => state.home)
  console.log(home)
  return (
    <>
    <div className="header-container">
      <Header />
    </div>
    <div className="home-container">
      {home.map((item, index) => (
       <HomeCards key={index} item={item} />
      )) 
      }
    </div>
    </>
  )
}

export default Home