import React from "react";
import "./Post.scss";
import { posts } from "../data";
import { useLocation } from "react-router-dom";

import Video from "../components/Video";
function Post() {
  const location = useLocation().pathname.split("/").pop();

  const post = posts.find((post) => post.id.toString() === location);
  // console.log(post.video);
  return (
    <div className="post">
      <img src={post.img} alt="" className="post_img" />
      <Video video={post.video} image={post.img} />
      <h1 className="post_title">{post.title}</h1>
      <p className="post_desc">{post.desc}</p>
      <p className="post_longdesc">{post.longDesc}</p>
    </div>
  );
}

export default Post;
