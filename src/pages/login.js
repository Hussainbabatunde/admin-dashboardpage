import React from "react";
import "./login.css";

const Login = () => {
    return(
        <div className="loginpage">
            
            <form className="loginform">
            <p className="login">LOGIN</p>
            <div className="logininput">
                <label for="email" className="email">Email:</label>
                <input type="email" id="email" placeholder="Email" className="emailinput"/>
            </div>
            <div className="logininput">
                <label for="email" className="email">Password:</label>
                <input type="password" id="password" placeholder="password" className="emailinput"/>
            </div>
            <button type="submit" className="loginbut">Login</button>
            </form>
        </div>
    )
}

export default Login;