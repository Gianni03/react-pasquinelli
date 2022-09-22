import './App.css';
import '../src/components/menu/Header'
import Header from '../src/components/menu/Header';
import ItemListContainer from './components/Contenido/ItemListContainer';

// import {browseRoueter, Routes, Route, link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Header/>
      <ItemListContainer greeting="Mi tienda con REACT"/>
    </div>
  );
}

// reatc router https://reactrouter.com/en/main

export default App;
