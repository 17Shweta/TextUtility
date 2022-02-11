// import React, {useState} from 'react'
import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Upper case was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE","success");
  }  

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }  
  const handleClearText = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Cleared the Text","success");
  }  
  const handleCopy = () => {
   var text = document.getElementById("myBox");
   text.select();
   navigator.clipboard.writeText(text.value);
   document.getSelection().removeAllRanges();
   props.showAlert("Copied the Text","success");
  }

  const handleExtraSpaces = () => {
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "))
     props.showAlert("Cleared the extra spaces in the Text","success");
  }

  const handleOnChange = (event)=>{
    // console.log("on change was clicked");
    setText(event.target.value);
  }  
  const [text, setText] = useState('');
//   text = "new text"; // wrong way to change the text
//   setText('It is using setText function to update the text field');
  return (
      <>
          <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1 className="mb-2">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
          <h2>Your text summary</h2>
          <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
          <h2>preview</h2>
          <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
      </>
    )
}
