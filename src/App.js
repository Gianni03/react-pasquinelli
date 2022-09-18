import './App.css';
import '../src/components/menu/Header'
import Header from '../src/components/menu/Header';
import ItemListContainer from './components/Contenido/ItemListContainer';
import ItemCount from './components/Contenido/ItemCount';

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer greeting="Mi tienda con REACT"/>
      <ItemCount/>
    </div>
  );
}

export default App;
