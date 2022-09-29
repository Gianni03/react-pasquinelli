import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../services/mockAPI"
import './ItemDetail.css'
import { useParams } from 'react-router-dom';



function ItemDetailContainer() {
  let [item, setItem] = useState({});

  console.log("params", useParams())


 const { itemId } = useParams(); 

  useEffect(() => {
    getItem(itemId).then((respuestaDatos) => setItem(respuestaDatos));
  }, [itemId]);

  
  return (
    <div>
      <div className="detail__container">
        <ItemDetail 
              key={item.id}
              id={item.id}
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
