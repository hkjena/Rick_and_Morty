import React from "react";

const Card = (props) => {
  const { name, air_date, episode } = props;
  return (
    <div className="card">
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{air_date}</p>
        <p className="card-text">{episode}</p>
      </div>
    </div>
  );
};

export default Card;
