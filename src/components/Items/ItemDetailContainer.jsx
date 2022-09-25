import React, { useState, useEffect } from "react";
import getItem from "../services/mockAPI";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  let [data, setData] = useState({});

  useEffect(() => {
    getItem().then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  return (
    <div>
      <div className="detail__container">
        <ItemDetail
          price={data.price}
          title={data.title}
          img={data.img}
          detail={data.detail}
        />
      </div>
    </div>
  );
}

export default ItemDetailContainer;
