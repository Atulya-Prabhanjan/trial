function Section4(){
    return(<div id="Section4">
        <img src={process.env.PUBLIC_URL+"quiz.png"} style={{display: "inline-block"}} className="h-150 w-150 rounded-full hover:animate-spin"/>
        <div className="words1" style={{display: "inline-block"}}>
            <h1 className="text-sm font-medium text-gray-900">Quiz for Enagement</h1>
            <h2 className="text-sm font-medium text-gray-900">This is a block of text to provide more information</h2>
            <h2 className="text-sm font-medium text-gray-900">about this section and why you should click the button</h2>
            <button>Book a Demo</button>
        </div>
        <br/>
    </div>)
}

export default Section4;