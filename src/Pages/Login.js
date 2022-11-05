import React, { useState, useEffect } from "react";
import {  useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LimitedAccessRoute from "../Components/LimitedAccessRoute"

function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isConnected, setIsConnected]=useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const url = "http://localhost:8080/api/login";

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            username: userName,
            password: password,
          }),
        });
        const json = await response.json();
        localStorage.setItem("access_token", json.access_token);
        localStorage.setItem("refresh_token", json.refresh_token);
        const responseUserInformation = await fetch("http://localhost:8080/api/user/" + userName, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        const {id,lastName, name,username,roles} = await responseUserInformation.json();
        dispatch({type: "IS_CONNECTED", payload:{isConnected:true,id,lastName, name, username, roles}})
        console.log('***************** ', {id,lastName, name,username,roles} )
        navigate("/home");
      } catch (error) {
        setIsConnected(true)
        console.log("error", error);
      }
    };

    userName.length > 0 && password.length > 0 && fetchData();
  }, [userName, password]);


  return (
    <>
      <div className="Auth-form-container">
        <form
          className="Auth-form"
          onSubmit={(event) => {
            event.preventDefault();
            setUserName(event.target.userName.value);
            setPassword(event.target.password.value);
            
          }}
        >
          <div className="Auth-form-content">
          <LimitedAccessRoute/>
            {/* <h3 className="Auth-form-title">MyBookStore.</h3> */}
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1 rounded-0"
                placeholder="Enter email"
                id="userName"
                name="userName"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1 rounded-0"
                placeholder="Enter password"
                id="password"
                name="password"
                required
              />
            </div>
            {isConnected && <div className="form-group mt-3 password-incorrect">"Email ou mot de passe incorrect"</div>}
            <div className="row">            
              <div className="d-grid gap-2 mt-3 col-md-6">
                <button type="submit" className="btn btn-primary rounded-0">
                  Sign in
                </button>
              </div>
              <div className="d-grid gap-2 mt-3 col-md-6 ">
                <button onClick={()=>navigate("/register")} type="submit" className="btn btn-secondary rounded-0">
                  Sign up
                </button>
              </div>
            </div>
            {/* <p className="forgot-password text-center mt-2">
              <a href="/register">Register</a>
            </p> */}
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
