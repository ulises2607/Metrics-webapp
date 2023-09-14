import React from 'react'
import { useParams } from 'react-router';

const Details = () => {
  const {country} = useParams();
  return (
    <div className='details-container'>{country}</div>
  )
}

export default Details