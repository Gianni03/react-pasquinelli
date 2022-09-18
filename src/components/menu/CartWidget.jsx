import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

function CartWidget() {
 
  return (
    <div className="NavBar--icon">
      {/* colocando color="#61dafb" no me lo toma, y tampoco desde el css */}
      <IconButton
        color="primary"
        className="NavBar--icon__cart"
        aria-label="add to shopping cart"
      >
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </div>
  );
}

export default CartWidget;
