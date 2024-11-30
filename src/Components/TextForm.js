import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [originaltext, setOriginaltext] = useState("");

  

  const handleUpClick = () => {
    if(text.trim().length ===0){
      props.showAlert("Enter the Text to Convert into Uppercase","warning");
    }else{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
    }
  };

  const handleLoClick = () => {
    if(text.trim().length ===0){
      props.showAlert("Enter the Text to Convert into Lower Case","warning");
    }else{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
    }
  };

  const handleOriginal = () => {
    if(text.trim().length ===0){
      props.showAlert("Enter the Text to Convert into Original Text","warning");
    }else{
    setText(originaltext);
    props.showAlert("converted to original","success");
    }
  };

  const handleClear = () => {
    if(text.trim().length ===0){
      props.showAlert("The Text is Already Cleared","warning");
    }else{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    setOriginaltext(event.target.value);
  };

  const handleCopy = ()=>{
    if(text.trim().length ===0){
      props.showAlert("Enter the text you want to copy","warning");
    }else{
    let newText = document.getElementById("exampleFormControlTextarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text has been Copied","success");
    }
  };

  const handleExtraspaces = ()=>{
    if(text.trim().length ===0){
      props.showAlert("Enter the Text to Remove Extra Spaces","warning");
    }else{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed","success");
    }
  };

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <h1 style={{marginTop:"20px",}}>{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#363535':"white", color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary m-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary m-2" onClick={handleOriginal}>
          Convert to Original
        </button>
        <button className="btn btn-primary m-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary m-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary m-2" onClick={handleExtraspaces}>
          Remove Extra Space
        </button>
      </div>

      <div className="container my-2 " style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
       
        <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words,{text.length} characters</p> 
        <p>{text.trim().length === 0
        ? "0 Minutes 0 Seconds"
        : `${Math.floor(0.008 * text.trim().split(/\s+/).length)} Minutes 
           ${Math.round((0.008 * text.trim().split(/\s+/).length * 60) % 60)} Seconds`}
        </p>

        
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the Textbox to Priview Here"}</p>
      </div>
      
    </>
  );
}
