import React from "react";
import "./ServiceCard.css";

const Card = ({ icon, title, text }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={icon} alt="Icon" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
