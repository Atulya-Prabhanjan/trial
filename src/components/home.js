import Navbar from "./navbar";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
import Footer from "./footer";

function Home(){
    return(<div>
        <Navbar/>
        <Section1/>
        <h1 style={{textAlign:"center"}} className="text-sm font-medium text-gray-900">Simple platform for organising shift work</h1>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Footer/>
    </div>)
}

export default Home;