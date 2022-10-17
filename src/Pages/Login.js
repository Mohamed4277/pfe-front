import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [page, setPage] = useState("/");
  const navigate = useNavigate();
  useEffect(() => {
    const url = "api/login";

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
        console.log("Login return: ", json);
        localStorage.setItem("access_token", json.access_token);
        localStorage.setItem("refresh_token", json.refresh_token);
        setPage("home");
        console.log("******** Page", page);
        navigate(page);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
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
            navigate(page);
          }}
        >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">MyBookStore.</h3>
            <div className="form-group mt-3">
              <label>Email </label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                id="userName"
                name="userName"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                id="password"
                name="password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-center mt-2">
              <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
