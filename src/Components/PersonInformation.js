import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function PersonInformation() {
  const [myAccount, setMyAccount] = useState({});
  /*useEffect(() => {
    const url = "http://localhost:8080/api/users";
    const token = localStorage.getItem("access_token");

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-Type": "application/json",
          },
        });
        const json = await response.json();
        setMyAccount(json[0]);
        console.log("", json[0]);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);*/


  const { name, username, lastName } =useSelector((state)=>state.user);

  return (
    <div className="container">
        <div className="row text-center mb-5">
          <h4>Informaton personnelle</h4>
        </div>
      <form>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label className="form-label" for="accountFirstName">
                Prénom
              </label>
              <input
                className="form-control form-control-sm"
                id="accountFirstName"
                type="text"
                defaultValue={name}
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label" for="accountLastName">
                Nom
              </label>
              <input
                className="form-control form-control-sm"
                id="accountLastName"
                type="text"
                placeholder="Nom de famille"
                defaultValue={lastName}
                required=""
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="form-label" for="accountEmail">
                Adresse mail
              </label>
              <input
                className="form-control form-control-sm"
                id="accountEmail"
                defaultValue={username}
                type="email"
                placeholder="Email Address"
                required=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label" for="accountPassword">
                Password actuel
              </label>
              <input
                className="form-control form-control-sm"
                id="accountPassword"
                type="password"
                placeholder="Password actuel"
                required=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label" for="AccountNewPassword">
                Nouveau password
              </label>
              <input
                className="form-control form-control-sm"
                id="AccountNewPassword"
                type="password"
                placeholder="Nouveau password"
                required=""
              />
            </div>
          </div>
          <div className="col-12">
            <button type="button" class="btn btn-lg btn-primary">
              Sauvegarder
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PersonInformation;
