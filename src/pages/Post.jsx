import React from "react";
import "./Post.scss";
import { posts } from "../data";
function Post() {
  const post = posts[2];
  return (
    <div className="post">
      <img src={post.img} alt="" className="post_img" />
      <h1 className="post_title">{post.title}</h1>
      <p className="post_desc">{post.desc}</p>
      <p className="post_longdesc">{post.longDesc}</p>
    </div>
  );
}

export default Post;
