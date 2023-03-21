import React from "react";

const Card = ({ children }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">{children} </div>
    </div>
  );
};

export default Card;
