import React, { useState } from "react";
// import Navbar from './Mycomponents/Navbar';
import PropTypes from "prop-types";

export default function Textform(props) {
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = [];
  let [count, Setcount] = useState(0);
  let [preview,Setpreview]= useState('Enter sometext to Preview here');

  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearclick = () => {
    let text = "";
    setText(text);
    Setcount(0);
  };
  const [text, setText] = useState("");

  const textlen = text.trim().length > 0 ? text.split(" ").length : 0;

  for (const char of text) {
    arr.push(char);
  }
  const handleVowelclick = () => {
    for (const el of arr) {
      vowels.forEach((element) => {
        if (el === element) {
          count += 1;
        }
      });
    }
    Setcount(count);
  };

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
          >
            Convert into UpperCase
          </button>
          <button
            type="button"
            className={`btn btn-${props.button} btn-sm`}
            onClick={handleLowclick}
          >
            Convert into LowerCase
          </button>
          <button
            type="button"
            className={`btn btn-${props.button} btn-sm`}
            onClick={handleVowelclick}
          >
            Count of the vowels
          </button>
        </div>
        <div>
          <button
            type="button"
            className={`btn btn-${props.button} btn-sm`}
            onClick={handleClearclick}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="container my-5 d-flex gap-5">
        <div className="container ">
          <h3>Word Counter</h3>
          <p>
            {textlen} words {text.length} characters
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
