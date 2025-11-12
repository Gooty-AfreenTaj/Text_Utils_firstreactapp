import React, { useState } from "react";
// import Navbar from './Mycomponents/Navbar';
import PropTypes from "prop-types";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function Textform(props) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let arr = [];
  let [count, Setcount] = useState(0);
  let [preview,Setpreview]= useState('Enter sometext to Preview here');
  let isDisabled = false;
  
  
  const handleonChange = (event) => {
    setText(event.target.value);

  };
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
     if (text.length === 0) {
  isDisabled = true;
  alert("Please enter some text to perform this action.");
}
  };
  const handleLowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
     if (text.length === 0) {
  isDisabled = true;
  alert("Please enter some text to perform this action.");
}
  };
  const handleClearclick = () => {
    let text = "";
    setText(text);
    Setcount(0); 
  };
  const [text, setText] = useState("");
  const actualText = text.replace(/\s+/g," ").trim();

  const textlen = actualText.trim().length > 0 ? actualText.split(" ").length : 0;

  for (const char of text) {
    arr.push(char);
  }
 
  const handleVowelclick=()=>{
    let vowelcount=0;
    if (text.length === 0) {
  isDisabled = true;
  alert("Please enter some text to perform this action.");
}
    for(const el of arr){
      vowels.forEach((element)=>{
        if(el === element){
          vowelcount +=1;
        }
      })
    }Setcount(vowelcount);
  }
//  let isDisabled = false;
// if (text.length === 0) {
//   isDisabled = true;
//   alert("Please enter some text to perform this action.");
// }


  return (
    <>
      <h3 className="text-center">{props.heading}</h3>
      <div className="mb-3 mx-auto">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonChange}
          id="exampleFormControlTextarea1"
          rows="10"
          style={{
            backgroundColor: props.mode === "light" ? "#514f53ff" : "white",
            color: props.mode === "light" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <div className="d-flex container">
        <div className="d-flex container gap-2">
          <button
            type="button"
            className={`btn btn-${props.button} btn-sm`}
            onClick={handleUpclick}
            disabled={isDisabled}
          >
            Convert into UpperCase
          </button>
          <button
            type="button"
            className={`btn btn-${props.button} btn-sm`}
            onClick={handleLowclick}
            disabled={isDisabled}

          >
            Convert into LowerCase
          </button>
          <button
            type="button"
            className={`btn btn-${props.button} btn-sm`}
            onClick={handleVowelclick}
            disabled={isDisabled}

          >
            Count of the vowels
          </button>
        </div>
        <div>
          <button
            type="button"
            className={`btn btn-${props.button} btn-sm`}
            onClick={handleClearclick}
            disabled={isDisabled}

          >
            Clear
          </button>
        </div>
      </div>
      <div className="container my-5 d-flex gap-5">
        <div className="container ">
          <h3>Word Counter</h3>
          <p>
            {textlen} words {actualText.length} characters
          </p>
        </div>
        <div className="container">
          <h3>Vowel Counter</h3>
          <p>{count} vowels are found</p>
        </div>
      </div>
      <div>
        <p>You can read this text in {0.008 * textlen} Minutes</p>
        <h2>Preview</h2>
        <p>{textlen > 0 ? text : "Enter text to Preview here"}</p>
      </div>
    </>
  );
}
