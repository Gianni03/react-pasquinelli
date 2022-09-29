import "./App.css";
import "./components/header/Header";
import Header from "./components/header/Header";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route
            path="/home"
            element={<ItemListContainer greeting="Mi tienda con REACT" />}
          />


          <Route path="/categoria/:cat" element={<ItemListContainer />}></Route>


          <Route path="/puas/:itemId" element={<ItemDetailContainer />} />
        </Routes>
        <Link to="/home">Home</Link>
      </>
    </BrowserRouter>
  );
}

export default App;
