import React, { useState, useContext }from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
// import Cart from '../cart/Cart'
import { cartContext } from '../context/CartContext';

function ItemDetail(props) {

  let { price, title , img , detail } = props;

  const [isInCart, setIsInCart] = useState(false)

  const { addItem } = useContext(cartContext);

  function handleOnAddToCart(contador){
    console.log(`agregaste ${contador} unidades al carrito`);
    addItem(props, contador);
    setIsInCart(true);
    // 
  }
  
  return (
    <div className='item'>
      <div className='item__detail'>
      <div className='item__title--detail'>
        <h3>{title}</h3>
        <h4>$ {price}</h4>
      </div>
      <div className='item__img--detail'>
        <img src={img} alt={title} />

      { !isInCart ? <ItemCount onAddToCart={handleOnAddToCart}/> : <Link to={'/Cart'}>Finalizar</Link> }

      </div>
      <div className="item__details--detail">
        <p>{detail}</p>
      </div>
      
    </div>
    </div>
  )
}

export default ItemDetail