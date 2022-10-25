import React, { useEffect, useState } from "react";

function PersonInformation() {
  const [myAccount, setMyAccount] = useState({});
  useEffect(() => {
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
  }, []);
  const { name, username, lastName, password } = myAccount;
  console.log("***************", myAccount);
  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      {" "}
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
                value={name}
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
                value={lastName}
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
                value={username}
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
                placeholder="Current Password"
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
                placeholder="New Password */"
                required=""
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label className="form-label">Date</label>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label className="form-label">Genre</label>
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
