import React, { useState, useEffect } from "react";
import './ItemListContainer.css'
import getItems from '../services/mockAPI'
import Itemlist from "./Itemlist";


function ItemListContainer(props) {


  let [data, setData] = useState([]);
  
  useEffect(() => {
    getItems().then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  return (
    <div>
    <h1 className='titulo'>{props.greeting}</h1>
    <div className="a">
      <Itemlist data={data}/>
    </div>
    
    </div>
  
  )

}

export default ItemListContainer
// 1:57 - desafio


