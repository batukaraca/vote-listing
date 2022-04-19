import React from "react";
import "./CustomButton-style.css";

export const CustomButton = (props) => {
  const addItem = () => {
    props.onClick();
  };
  return (
    <button className="custom-btn" disabled={props.disabled} onClick={addItem}>
      {props.title}
    </button>
  );
};
