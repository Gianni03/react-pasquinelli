import './header.css'
import logo from '../../logosolosvg.svg';
import NavBar from './NavBar';


function Header(){
  return(
    <header className="Header">
    <img src={logo} className="App-logo" alt="logo" />
    <NavBar/>
    </header>

  );
}

export default Header;