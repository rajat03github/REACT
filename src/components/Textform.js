import React,{useState} from 'react'

// useState is a hook

export default function TextForm(props) {
    
    const handleUpClick = () => {
        console.log("console"  + text)
        let newText= text.toUpperCase();
        setText(newText);
        props.showalert("coverted to UpperCase ","success");
    }
    
    const handleLowClick = () => {
        console.log("console"  + text)
        let newText= text.toLowerCase();
        setText(newText);
        props.showalert("coverted to LowerCase ","success");
    }
    
    
    // use event as parameter
    
    const handleonChange = (event) => {
        console.log("console handleonChange")
        setText(event.target.value);
        
    }
    const[text, setText ] = useState('');
    
    // setText("sdada");

    return (
        <>

        <div className='container'>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <label for="mybox" className="form-label">Example textarea</label>
                <textarea className="form-control" value = {text} onChange={handleonChange} id="mybox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>

            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        </div>

        <div className="container">
            <h2>Your text sum</h2>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length } Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text :"Enter Something in textbox Above"}</p>
        </div>

        </>
    )
}
