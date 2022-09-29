import React, { useState, useEffect } from "react";
import './ItemListContainer.css'
import getItems from '../services/mockAPI'
import Itemlist from "./Itemlist";
import { useParams } from 'react-router-dom';
import { getItemByCategory } from "../services/mockAPI";

function ItemListContainer(props) {


  let [data, setData] = useState([]);
  const { cat } = useParams();
  

  useEffect(() => {
    if (cat === undefined){
      
      getItems().then((respuestaDatos) => setData(respuestaDatos));
    
    } else {

      getItemByCategory(cat).then((respuestaDatos) => setData(respuestaDatos));
    
    }
  }, [cat]);



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



