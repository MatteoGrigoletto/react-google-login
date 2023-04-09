import React from "react";
import "./Login.scss";
import googleImg from "../img/google.png";
import githubImg from "../img/github.png";

function Login() {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  return (
    <div className="login">
      <h1 className="login_title"> Scegli come accedere</h1>
      <div className="wrapper">
        <div className="left">
          <div className="button google" onClick={google}>
            <img src={googleImg} alt="" className="icon" />
            google
          </div>
          <div className="button github" onClick={github}>
            <img src={githubImg} alt="" className="icon" />
            github
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
