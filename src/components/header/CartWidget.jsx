import React, {useContext} from "react";
import { cartContext } from '../context/CartContext';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";


function CartWidget() {

  const { cart } = useContext(cartContext);


  return (
    <div className="NavBar--icon">
      
      <IconButton
        color="primary"
        className="NavBar--icon__cart"
        aria-label="add to shopping cart"
      >
        <ShoppingCartOutlinedIcon />
        <span>{cart.length}</span>
      </IconButton>
    </div>
  );
}



export default CartWidget;
