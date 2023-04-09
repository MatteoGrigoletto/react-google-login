import React from "react";
import "./Login.scss";
import google from "../img/google.png";
import facebook from "../img/facebook.png";
import github from "../img/github.png";

function Login() {
  return (
    <div className="login">
      <h1 className="login_title"> Scegli come accedere</h1>
      <div className="wrapper">
        <div className="left">
          <div className="login_button google">
            <img src={google} alt="" className="icon" />
            google
          </div>
          <div className="login_button facebook">
            <img src={facebook} alt="" className="icon" />
            facebook
          </div>
          <div className="login_button github">
            <img src={github} alt="" className="icon" />
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
