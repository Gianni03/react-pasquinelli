import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import "./ItemCount.css";
import Button from "./Button";

function ItemCount({ onAddToCart }) {
  const [contador, setContador] = useState(1);
  // let contador = 1;

  const resta = () => {
    console.log("resta");

    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Mínimo una unidad");
    }
  };

  const suma = () => {
    console.log("suma");

    if (contador >= 1 && contador < 6) {
      setContador(contador + 1);
    } else {
      alert("Máximo permitido");
    }
  };

  

  return (
    <div className="ItemCount">
      <div>
        <IconButton
          color="primary"
          className="ItemCount--contador"
          aria-label="restar cantidad"
          onClick={resta}
        >
          <RemoveIcon />
        </IconButton>
        <h3 className="ItemCount--cantidad">{contador}</h3>
        <IconButton
          color="primary"
          className="ItemCount--contador"
          aria-label="sumar cantidad"
          onClick={suma}
        >
          <AddIcon />
        </IconButton>
      </div>

      <div>
        <Button onClick={ () => onAddToCart(contador)}>Comprar</Button>
      </div>
    </div>
  );
}

export default ItemCount;
