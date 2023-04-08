import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
function Card({ post }) {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <span className="title">{post.title}</span>
        <img src={post.img} alt="" className="img" />
        <p className="desc">{post.desc}</p>
        <button className="card_button">Read More</button>
      </Link>
    </div>
  );
}

export default Card;
