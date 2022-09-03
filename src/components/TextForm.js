import React, { useState } from "react";

export default function TextForm(props) {
  const doUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text has been uppercased', 'Info')
  };

  const doCleanArea = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text has been erased', 'Info')
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-4 px-4">
        <h3 className="mb-4">{props.heading}</h3>
        <textarea
          className="form-control"
          id="textBox"
          rows="10"
          value={text}
          onChange={handleChange}
          style={{backgroundColor: props.mode==='light'?'#fff':'#313543', color: props.mode==='light'?'#333':'#fff'}}
        ></textarea>
        <button
          type="button"
          className="btn btn-dark my-4"
          onClick={doUpperCase}
        >
          Convert to UpperCase
        </button>
        &emsp;
        <button
          type="button"
          className="btn btn-dark my-4"
          onClick={doCleanArea}
        >
          Erase Everything
        </button>
      </div>
      <div className="container px-4">
        <h3>Your Text Summary</h3>
        <p>Your text has {text.split(" ").length} words, {text.length} characters</p>
      </div>
    </>
  );
}
