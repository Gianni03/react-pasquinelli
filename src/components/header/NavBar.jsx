import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function NavBar(){
return(
<nav className="NavBar">
  <ul className="menu">
    <li><Link to="/home" alt="menu">Home</Link></li>
    <li><Link to="/categoria/a" alt="menu">cat a</Link></li>
    <li><Link to="/categoria/b" alt="menu">cat b</Link></li>
    <li><Link to="/categoria/c" alt="menu">cat c</Link></li>
    <li><Link to="/categoria/d" alt="menu">cat d</Link></li>
    
  </ul>
  <CartWidget/>
  
</nav>

);
}

export default NavBar;




