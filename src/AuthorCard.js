import React from "react";
import { Link } from "react-router-dom";

// Components
import ImageWithPlaceHolder from "./ImageWithPlaceHolder";

const AuthorCard = ({ author }) => (
  <div className="col-lg-4 col-md-6 col-12">
    <Link to={`/authors/${author.id}`} className="card">
      <div className="image">
        <ImageWithPlaceHolder
          className="card-img-top img-fluid"
          src={author.imageUrl}
          alt={author.name + " " + author.address}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <span>{author.name + " " + author.address}</span>
        </h5>
        <small className="card-text">{author.classes.length} classes</small>
      </div>
    </Link>
  </div>
);

export default AuthorCard;
