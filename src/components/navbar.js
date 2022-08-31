import logo from '../logo.svg';
import Home from "./home";
import {Link} from "react-router-dom"
import Login from "./login";

function Navbar(){
    return(<div className="Nav-Bar">
        <div className="Nav-Element">
            <Link to={Home} style={{ textDecoration: 'none', color: 'black' }}><img src={logo} className="animate-spin-logo" style={{display: "inline-block",position: "absolute",top:"0px",left:"3px",height: "80px",width: "80px"}} alt=" "/></Link>
            <Link to={Home} style={{ textDecoration: 'none', color: 'black' }}><h2 id="Nav">Features</h2></Link>
            <Link to={Home} style={{ textDecoration: 'none', color: 'black' }}><h2 id="Nav">Pricing</h2></Link>
            <Link to={Home} style={{ textDecoration: 'none', color: 'black' }}><h2 id="Nav">Book a demo</h2></Link>
        </div>
        <div id="Nav" className="space-x-24">
            <Link to={Login} style={{ textDecoration: 'none', color: 'white' }}><button className="h-12 w-32 leading-loose border-black transition ease-in-out rounded-full bg-orange-700 hover:bg-orange-800 translate-y-1 hover:scale-110 ">Login</button></Link>
            <Link to={Login} style={{ textDecoration: 'none', color: 'white' }}><button className="h-12 w-32 leading-loose border-black transition ease-in-out rounded-full bg-orange-700 hover:bg-orange-800 translate-y-1 hover:scale-110 ">Sign-up</button></Link>
        </div>
    </div>)
}

export default Navbar;