import CartWidget from './CartWidget';
import { Link } from "react-router-dom";


function NavBar(){
return(
<nav className="NavBar">
  <ul className="menu">
    <li><Link to="/home" alt="menu">Home</Link></li>
    <li><Link to="/categoria/Jazz III" alt="menu">Jazz III</Link></li>
    <li><Link to="/categoria/Ultex" alt="menu">Ultex</Link></li>
    <li><Link to="/categoria/Flow" alt="menu">Flow</Link></li>
    <li><Link to="/categoria/Tortex" alt="menu">Tortex</Link></li>
    <li><Link to="/Cart" alt="menu"><CartWidget/></Link></li>
  </ul>

  
</nav>

);
}

export default NavBar;




