import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    //console.log("button was pressed");
    setText(text.toUpperCase());
    props.showAlert("converted to UPPERCASE", "success");
  };
  const handleDownClick = () => {
    //console.log("button was pressed");
    setText(text.toLowerCase());
    props.showAlert("converted to lowercase", "success");
  };
  const handelCamelCase = () => {
    //console.log("button was pressed");
    const camelCaseText = text
      .toLowerCase()
      .split(" ")
      .map((x) => x.replace(x[0], x[0].toUpperCase()))
      .join("");

    setText(
      camelCaseText.charAt(0).toLocaleLowerCase() + camelCaseText.slice(1)
    );
    props.showAlert("converted to camelCase", "danger");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${
              props.mode === "dark" ? "dark" : "light"
            } text-${props.mode === "dark" ? "light" : "dark"}`}
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleDownClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handelCamelCase}>
          Convert to camelCase
        </button>
      </div>
      <div className="container">
        <h1>Preview</h1>

        <h6>
          total words are : {text && text.split(" ").length} and number of
          characters are {text.length}
        </h6>
        <p>{text}</p>
      </div>
    </>
  );
}
export { TextForm };
