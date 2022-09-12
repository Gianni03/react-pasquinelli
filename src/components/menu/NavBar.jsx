import CartWidget from './CartWidget';

function NavBar(){
return(
<nav className="NavBar">
  <ul class="menu">
    <li><a href="home" alt="menu">Home</a></li>
    <li><a href="http://#" alt="menu">Productos</a></li>
    <li><a href="http://#" alt="menu">Contacto</a></li>
  </ul>
  <CartWidget/>
  
</nav>

);
}

export default NavBar;

// hacer un CartWidget y ItemListContainer
// crear estos dos componentes y mostrarlo
// el car es el icono dentro del nav
// componente con el listado de productos al que solo le vamos a pasar la propiedad greeting
// <ItemListContainer greeteng="Mi Tienda React" /> esto en app
//<div><h1>{greeting}</h1> </div>


