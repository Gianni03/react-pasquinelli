import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

function Item(props) {

  let { price, title , img , detail } = props;

  return (
    <div className='item'>
      <div className='item__title'>
        <h3>{title}</h3>
      </div>
      <div className='item__img'>
        <img src={img} alt="pua ?" />
      </div>
      <div className="item__details">
        <h4>$ {price}</h4>
        <p>{detail}</p>
      </div>
        <ItemCount/>
    </div>
  )
}

export default Item







