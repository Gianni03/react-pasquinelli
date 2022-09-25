import React from 'react'
import ItemCount from './ItemCount';

function Item(props) {

  let { price, title , img , detail } = props;

  return (
    <div className='item'>
      <div className='item--title'>
        <h3>{title}</h3>
      </div>
      <div className='item--img'>
        <img src={img} alt="pua ?" />
      </div>
      <div className="item--details">
        <h4>$ {price}</h4>
        <p>{detail}</p>
      </div>
        <ItemCount/>
    </div>
  )
}

export default Item







