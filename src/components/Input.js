import React from "react";

const Input = (props) => {
  return (
    <div>
      <h2>Write Your Input Here</h2>
      <textarea
        className="input"
        rows="55"
        cols="100"
        onChange={(e) => {
          props.setdatafn(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default Input;
