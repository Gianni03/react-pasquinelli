import React from 'react'
import { Link } from 'react-router-dom';



function Item(props) {

  let { price, title , img , detail, id } = props;
  const urlItem = `/puas/${id}`;


  return (
    <div className='item'>
      <div className='item__title'>
        <h3>{title}</h3>
      </div>
      <div className='item__img'>
        <img src={img} alt={title} />
      </div>
      <div className="item__details">
        <h4>$ {price}</h4>
        <p>{detail}</p>
        <Link to={urlItem}>ver mas</Link>
      </div>


    </div>
  )
}

export default Item







