import React from 'react'
import { getItem } from '../services/mockAPI'

function ItemDetail() {

  
  return (
    <div>
      <div className='item'>
      <div className='item__title--detail'>
        <h3>{getItem.title}</h3>
        <h4>$ {getItem.price}</h4>
      </div>
      <div className='item__img--detail'>
        <img src={getItem.img} alt="pua ?" />
      </div>
      <div className="item__details--detail">
        <p>{getItem.detail}</p>
      </div>
      
    </div>
    </div>
  )
}

export default ItemDetail