import Testimonial from "./testimonial";

function Section6(){
    return(<div id="Section6" className="flex space-x-40 space-y-4 text-center ...">
        <h1 className="text-4xl font-mono text-gray-900 text-center">Testimonials</h1>
        <h2 className="text-2xl font-mono text-gray-900 text-center">People love this!</h2>
        <div style={{textAlign: "center",display: "inline-block"}}><Testimonial/></div>
        <div style={{textAlign: "center",display: "inline-block"}}><Testimonial/></div>
        <div style={{textAlign: "center",display: "inline-block"}}><Testimonial/></div>
    </div>)
}

export default Section6;