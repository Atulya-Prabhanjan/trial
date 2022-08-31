import Box from "./box"

function Section2(){
    return(<div className="flex space-x-24 ..." id="Section2">
        <div style={{textAlign: "center",display: "inline-block"}} className="py-4"><Box src={process.env.PUBLIC_URL+"images.jpg"} title="Employee Time Tracking"/></div>
        <div style={{textAlign: "center",display: "inline-block"}} className="py-12"><Box src={process.env.PUBLIC_URL+"timesheet.jpg"} title="Electronic Time sheet"/></div>
        <div style={{textAlign: "center",display: "inline-block"}} className="py-8"><Box src={process.env.PUBLIC_URL+"bookingmanagement.jpg"} title="Booking Management"/></div>
    </div>)
}

export default Section2;