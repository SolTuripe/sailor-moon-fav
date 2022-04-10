import React from "react";
import "./sailorCard.css";

const SailorCard = (props) => {
  return (
    <div className="sailorCard">
      <div className="name">{props.name}</div>
      <img className="imagen" src={props.img} alt="" />
      <div className="identity">Identity: {props.identity}</div>
    </div>
  );
};

export default SailorCard;
