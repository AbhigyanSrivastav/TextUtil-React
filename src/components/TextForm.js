import { useState } from "react";
import React from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("hanlde")
    setText(text.toUpperCase());
     props.showAlert("Converted to UPPER case","success");
  };
  const handleLoClick = () => {
    // console.log("hanlde")
    setText(text.toLowerCase());
    props.showAlert("Converted to lower case","success");

  };

  const handleCopyClick = (event) => {
    navigator.clipboard.writeText(text);
    event.target.innerText="Copied!";
    props.showAlert("Copied","success");
    setInterval(() => {
    event.target.innerText="Copy To Clipboard";
    }, 5000);
  };

  const handleOnChange = (event) => {
    // console.log("Value changed");
    setText(event.target.value);
  };

  const call = () => {
    let removeChar = text.replace(/[^A-Za-z]\s+/g, " ");
    let newWord = removeChar.trim().split(" ");
    if (newWord.length<=1 && (newWord.includes(" ")|| newWord.includes(""))) {
      return newWord.length-1; 
    }
    return newWord.length;
  };
  const [text, setText] = useState("Enter Your Text");
  return (
    <>
      <div className="container mb-3" style={{color:props.mode==="light"?"black":"white",backgroundColor:props.mode==="light"?"white":"black"}}>
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary me-3 " onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button type="button" className="btn btn-primary me-3" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button type="button" className="btn btn-primary " onClick={handleCopyClick}>
          Copy To Clipboard
        </button>
      </div>

      <div className="container" style={{color:props.mode==="light"?"black":"white",backgroundColor:props.mode==="dark"?"black":"white"}}>
        <h1>Your Text Summary</h1>
        <p>
          {call()} Words {text.length} Characters
        </p>
        <p>{Math.round((0.252 * text.split(" ").length) / 60)} Minute Read</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
