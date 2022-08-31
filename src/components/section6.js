import Testimonial from "./testimonial";

function Section6(){
    return(<div id="Section6" className="flex space-x-24 space-y-16 ...">
        <h1 className="text-sm font-large text-gray-900">Testimonials</h1>
        <h2 className="text-sm font-medium text-gray-900">People love this!</h2>
        <div style={{textAlign: "center",display: "inline-block"}}><Testimonial/></div>
        <div style={{textAlign: "center",display: "inline-block"}}><Testimonial/></div>
        <div style={{textAlign: "center",display: "inline-block"}}><Testimonial/></div>
    </div>)
}

export default Section6;