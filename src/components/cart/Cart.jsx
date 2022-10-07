import React from 'react'
import { cartContext } from '../context/CartContext';


function Cart() {

  return (
    <div>{cartContext}</div>
  )
}

export default Cart