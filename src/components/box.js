function Box(props){
    return(<div className="Section2">
        <div className={props.src}/>
        <h1>{props.title}</h1>
        <h2>Description</h2>
    </div>)
}

export default Box;