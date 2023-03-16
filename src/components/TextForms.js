import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");
  let newText = text.toUpperCase();

  const handleOnClick = (event) => {
    setText(newText);
  };

  const handleClear = (event) => {
    setText("");
  };

  const handleLoClick = (event) => {
    setText(newText.toLowerCase());
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleTitleCase = (event) => {
    setText(
      text
        .toLowerCase()
        .split(" ")
        .map(function (text) {
          return text.charAt(0).toUpperCase() + text.slice(1);
        })
        .join(" ")
    );
  };

  const handleCopy = (event) => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const removeExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 " onClick={handleOnClick}>
          Uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLoClick}>
          {""}
          lowercase
        </button>
        <button className="btn btn-warning mx-2" onClick={handleTitleCase}>
          {""}
          Title Text
        </button>
        <button className="btn btn-success mx-2" onClick={handleCopy}>
          {""}
          Copy
        </button>
        <button className="btn btn-success mx-2" onClick={removeExtraSpaces}>
          {""}
          Remove Extra Spaces
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClear}>
          {""}
          Clear
        </button>

        <div className="container my-3">
          <h1>Text summary</h1>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
