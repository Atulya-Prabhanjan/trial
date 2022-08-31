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
        <h1 style={{textAlign:"center"}} className="text-2xl font-mono text-gray-900">Simple platform for organising shift work</h1>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <div className="mt-12">
            <h1 className="text-2xl font-mono text-gray-900 text-center">Subscribe to newsletter</h1>
            <input field="text" className="h-8 align-bottom" id="subscribe"/>
            <button className="align-top-text text-white h-8 w-32 leading-loose border-black transition ease-in-out bg-orange-700 hover:bg-orange-800 translate-y-1 hover:scale-110">Subscribe</button>
        </div>
        <Footer/>
    </div>)
}

export default Home;