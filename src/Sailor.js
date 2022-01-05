import React from "react";
import "./App.css";

const Sailor = (props) => {
  return (
      <div className="sailorCard">
          <div className="name">{props.name}</div>
          <div className="identity">Identity: {props.identity}</div>
          <img className="imagen" src={props.img} alt=""/>
      </div>
  )
};

export default Sailor;
