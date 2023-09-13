import React, { useEffect } from 'react'
import '../Assets/Styles/Home.css'
import { fetchHome } from '../Redux/Home/HomeSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

  const homeItems = useSelector(state => state.home.home)

 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHome())
  }, [dispatch])

  return (
    <div className='home-container'>
      <div className="item">Argentina</div>
      <div className="item">Bolivia</div>
      <div className="item">Peru</div>
      <div className="item">Chile</div>
      <div className="item">Uruguay</div>
      <div className="item">Brasil</div>
    </div>
  )
}

export default Home