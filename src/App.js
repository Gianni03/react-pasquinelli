import './App.css';
import '../src/components/menu/Header'
import Header from '../src/components/menu/Header';
import ItemListContainer from './components/Contenido/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer greeting="Mi tienda con REACT"/>
    </div>
  );
}

export default App;
