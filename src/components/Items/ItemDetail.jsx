import React from 'react'
import './ItemDetail.css'
//import { getItem } from '../services/mockAPI'
//import getItem from "../services/mockAPI";


function ItemDetail(props) {
 
  let { price, title , img , detail } = props;
  
  return (
    <div>
      <div className='item'>
      <div className='item__title--detail'>
        <h3>{title}</h3>
        <h4>$ {price}</h4>
      </div>
      <div className='item__img--detail'>
        <img src={img} alt="pua ?" />
      </div>
      <div className="item__details--detail">
        <p>{detail}</p>
      </div>
      
    </div>
    </div>
  )
}

export default ItemDetail