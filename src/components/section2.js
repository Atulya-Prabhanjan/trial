import Box from "./box"

function Section2(){
    return(<div className="Section2">
        <div style={{textAlign: "center",display: "inline-block"}}><Box src="images" title="Employee Time Tracking"/></div>
        <div style={{textAlign: "center",display: "inline-block"}}><Box src="timesheet" title="Electronic Time sheet"/></div>
        <div style={{textAlign: "center",display: "inline-block"}}><Box src="bookingmanagement" title="Booking Management"/></div>
    </div>)
}

export default Section2;