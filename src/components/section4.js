function Section4(){
    return(<div id="Section4" className="justify-items-center">
        <img src={process.env.PUBLIC_URL+"quiz.png"} style={{display: "inline-block"}} className="h-150 w-150 rounded-full hover:animate-spin" alt=" "/>
        <div className="words1" style={{display: "inline-block"}}>
            <h1 className="text-4xl font-nono text-gray-900">Quiz for Enagement</h1>
            <h2 className="text-lg font-mono text-gray-900">This is a block of text to provide more information</h2>
            <h2 className="text-lg font-mono text-gray-900">about this section and why you should click the button</h2>
            <button className="text-white h-12 w-32 leading-loose border-black transition ease-in-out rounded-full bg-orange-700 hover:bg-orange-800 translate-y-1 hover:scale-110 ">Book a Demo</button>
        </div>
        <br/>
    </div>)
}

export default Section4;