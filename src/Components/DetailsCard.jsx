import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../Redux/store'
import { fetchDetail, showDetails } from '../Redux/Details/detailsSlice'

const DetailsCard = ({name, imp_city, show, detail}) => {
    const dispatch = useDispatch()
    

    // const details = useSelector(state => state.details.cities)
    // details.map(item => item.provinces.map(item => 
    //     console.log("El show de ",item.nombre, "es", item.show))

    // )
    
    const handleClick = () => {
        dispatch(showDetails(imp_city))
        if(detail === undefined){
            dispatch(fetchDetail(imp_city))
        }

    }

    


  return (
    <div className='detailCard-container'>
        <div className="card-name">
            <strong>{name}</strong>
            <span>{imp_city}</span>
        </div>
        <div className="button-container">
            <button type='button' onClick={() => handleClick() && dispatch(showDetails())}>Show</button>
        </div>
        {show && (
        <ul>
          <li>elem1</li>
          <li>elem2</li>
          <li>elem3</li>
        </ul>
      )}
    </div>
  )
}


export default DetailsCard