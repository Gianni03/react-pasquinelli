import './header.css'
import logo from '../../logosolosvg.svg';
import NavBar from './NavBar';
import { Link } from "react-router-dom";



function Header(){
  return(
    <header className="Header">
    <Link to="/home">
    <img src={logo} className="App-logo" alt="logo" /> 
    </Link>
    <NavBar/>
    </header>

  );
}

export default Header;