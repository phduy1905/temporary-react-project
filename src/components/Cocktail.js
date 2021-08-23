import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ cocktail }) => {
  const { name, id, img, glass, alcoholic } = cocktail;
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alcoholic}</p>
        <Link className="btn btn-primary btn-details" to={`cocktails/${id}`}>
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
