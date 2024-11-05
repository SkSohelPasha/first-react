import React, {useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState("");
   
  
  const handleUpClick =()=>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!","success");
  }
  const handleclearClick =()=>{
    let newText='';
    setText(newText);
    props.showAlert("Text had Cleared!","success");
  }
  const handleLoClick =()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!","success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  const handleCopy=()=>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text have been Copied!","success");
  }


  return (
    <>
    <div className="container"  style={{color:props.mode === 'dark'?'white':'#00002b'}}>
  <div>
    <h1>{props.heading}</h1>
    <input type="text" className="form-control" id="mybox" aria-describedby="emailHelp" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'gray':'white', color:props.mode === 'dark'?'white':'#00002b'}}/>
  <button className="btn btn-primary my mx-2" onClick={handleUpClick}>Convert into Uppercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert into Lowercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleclearClick}>Clear text</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy text</button>
    </div>
    </div>
    <div className="container" style={{color:props.mode === 'dark'?'white':'#00002b'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something to Preview Here!"}</p>
    </div>
    </>
  );
}
