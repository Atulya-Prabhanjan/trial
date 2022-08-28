import logo from '../logo.svg';
import Home from "./home";
import {Link} from "react-router-dom"

function Footer(){
    return(<div className="Footer" style={{top:"180px"}}>
        <div className="Foo-Element">
            <Link to={Home} style={{ textDecoration: 'none', color: 'grey' }}><img src={logo} className="logo"/></Link>
            <Link to={Home} style={{ textDecoration: 'none', color: 'grey' }}><h2 className="Foo">About</h2></Link>
            <Link to={Home} style={{ textDecoration: 'none', color: 'grey' }}><h2 className="Foo">Privacy Policy</h2></Link>
            <Link to={Home} style={{ textDecoration: 'none', color: 'grey' }}><h2 className="Foo">T and C</h2></Link>
            <Link to={Home} style={{ textDecoration: 'none', color: 'grey' }}><h2 className="Foo">GDPR</h2></Link>
            <Link to={Home} style={{ textDecoration: 'none', color: 'grey' }}><h2 className="Foo">Contact</h2></Link>
            <Link to={Home} style={{ textDecoration: 'none', color: 'grey' }}><h2 className="Foo">A product of x and y ltd. Copyright</h2></Link>
        </div>
    </div>)
}

export default Footer;