function Section5(){
    return(<div className="Section5">
        <div className="words2" style={{display: "inline-block"}}>
            <h1 className="text-sm font-medium text-gray-900">Setup Support</h1>
            <h2 className="text-sm font-medium text-gray-900">This is a block of text to provide more information</h2>
            <h2 className="text-sm font-medium text-gray-900">about this section and why you should click the button</h2>
            <button>Book a Demo</button>
        </div>
        <img src={process.env.PUBLIC_URL+"setup.jpg"} style={{display: "inline-block"}}/>
    </div>)
}

export default Section5;