import React from 'react'

function Button(props) {


  return (
    <button className='btn__comprar' onClick={props.onClick}>
        {props.children}
    </button>

  )
}

export default Button