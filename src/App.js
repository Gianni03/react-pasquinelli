import './App.css';
import './components/header/Header'
import Header from './components/header/Header';
//import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';

// import {browseRoueter, Routes, Route, link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Header/>
      {/* <ItemListContainer greeting="Mi tienda con REACT"/> */}
      <ItemDetailContainer />
    </div>
  );
}

// reatc router https://reactrouter.com/en/main

export default App;
