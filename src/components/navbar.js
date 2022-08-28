import logo from '../logo.svg';
import Home from "./home";
import {Link} from "react-router-dom"
import Login from "./login";

function Navbar(){
    return(<div className="Nav-Bar">
        <div className="Nav-Element">
            <Link to={Home} style={{ textDecoration: 'none', color: 'grey' }}><img src={logo} className="logo"/></Link>
            <Link to={Home} style={{ textDecoration: 'none', color: 'grey' }}><h2 className="Nav">Features</h2></Link>
            <Link to={Home} style={{ textDecoration: 'none', color: 'grey' }}><h2 className="Nav">Pricing</h2></Link>
            <Link to={Home} style={{ textDecoration: 'none', color: 'grey' }}><h2 className="Nav">Book a demo</h2></Link>
        </div>
        <div className="Nav">
            <Link to={Login} style={{ textDecoration: 'none', color: 'grey' }}><button className="Nav-Button">Login</button></Link>
            <Link to={Login} style={{ textDecoration: 'none', color: 'grey' }}><button className="Nav-Button">Sign-up</button></Link>
        </div>
    </div>)
}

export default Navbar;