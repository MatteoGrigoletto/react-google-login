import React from "react";
import { posts } from "../data";
import Card from "../components/Card";
import "./Home.scss";

function Home() {
  const tamplate = () => {
    return posts.map((elm) => {
      return <Card post={elm} key={elm.id} />;
    });
  };
  return <div className="home">{tamplate()}</div>;
}

export default Home;
