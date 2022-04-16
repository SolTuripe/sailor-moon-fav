import React from "react";
import "./sailorCard.css";

const SailorCard = ({ name, img, identity }) => {
  return (
    <div className="sailorCard">
      <div className="name">{name}</div>
      <img className="imagen" src={img} alt="" data-testid="img" />
      <div className="identity">Identity: {identity}</div>
    </div>
  );
};

export default SailorCard;
