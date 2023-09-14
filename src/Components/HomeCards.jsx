import React from 'react'
import { Link } from 'react-router-dom';

const HomeCards = ({item}) => {
    console.log(item);
  return (
    <div>
        <Link to={`/details/${item}`}>icon</Link>
        <h2>{item}</h2>
    </div>
  )
}



export default HomeCards