import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../services/mockAPI"
import './ItemDetail.css'



function ItemDetailContainer() {
  let [item, setItem] = useState({});

  useEffect(() => {
    getItem().then((respuestaDatos) => setItem(respuestaDatos));
  }, []);

  
  return (
    <div>
      <div className="detail__container">
        <ItemDetail 
              key={item.id}
              price={item.price}
              title={item.title}
              img={item.img}
              detail={item.detail}
        />
      </div>
    </div>
  );
}

export default ItemDetailContainer;
