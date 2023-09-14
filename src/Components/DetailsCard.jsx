import React from 'react'
import { useState } from 'react'

const DetailsCard = ({name, imp_city}) => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

  return (
    <div className='detailCard-container'>
        <div className="card-name">
            <strong>{name}</strong>
            <span>{imp_city}</span>
        </div>
        <div className="button-container">
            <button type='button' onClick={() => handleClick()}>Show</button>
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