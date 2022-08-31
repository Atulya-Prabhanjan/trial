function Box(props){
    return(<div className="Section2">
        <img src={props.src} className="h-150 w-150 rounded-full hover:animate-spin"/>
        <h1 className="text-2xl font-mono text-gray-900">{props.title}</h1>
        <h2 className="text-2xl font-mono text-gray-900">Description</h2>
    </div>)
}

export default Box;