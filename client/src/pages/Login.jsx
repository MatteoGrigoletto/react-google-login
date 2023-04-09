import React from "react";
import "./Login.scss";
import googleImg from "../img/google.png";
import facebookImg from "../img/facebook.png";
import githubImg from "../img/github.png";

function Login() {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div className="login">
      <h1 className="login_title"> Scegli come accedere</h1>
      <div className="wrapper">
        <div className="left">
          <div className="login_button google" onClick={google}>
            <img src={googleImg} alt="" className="icon" />
            google
          </div>
          <div className="login_button facebook">
            <img src={facebookImg} alt="" className="icon" />
            facebook
          </div>
          <div className="login_button github">
            <img src={githubImg} alt="" className="icon" />
            github
          </div>
        </div>
        <div className="center">
          <div className="line"></div>
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="nome" />
          <input type="text" placeholder="password" />
          <button className="submit">Accedi</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
