import Testimonial from "./testimonial";

function Section6(){
    return(<div className="Section6">
        <h1 className="text-sm font-large text-gray-900">Testimonials</h1>
        <h2 className="text-sm font-medium text-gray-900">People love this!</h2>
        <div style={{textAlign: "center",display: "inline-block"}}><Testimonial/></div>
        <div style={{textAlign: "center",display: "inline-block"}}><Testimonial/></div>
        <div style={{textAlign: "center",display: "inline-block"}}><Testimonial/></div>
    </div>)
}

export default Section6;