import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




function Register() {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adressPartOne, setAdressPartOne] = useState("");
  const [adressPartTwo, setAdressPartTwo] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const url = "http://localhost:8080/api/register";
    const token = localStorage.getItem("access_token");

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            lastName,
            username: email,
            password,
            adressPartOne,
            adressPartTwo,
            city,
            zip,
          }),
        });
        navigate("/login");
      } catch (error) {
        console.log("error", error);
      }
    };
    
    email.length>0 && password.length>0 && fetchData();
    
  }, [email, password]);

  const handlesubmit = (event) => {
    event.preventDefault();
    setEmail(event.target.email.value);
    setPassword(event.target.password.value);
    setAdressPartOne(event.target.adressPartOne.value);
    setAdressPartTwo(event.target.adressPartTwo.value);
    setCity(event.target.city.value);
    setZip(event.target.zip.value);
    setlastName(event.target.lastName.value);
    setName(event.target.name.value);
  }
  return (
    <div className="container">
      {/* <h3 className="Auth-form-title margin-title">MyBookStore.</h3> */}
      <form
        className="container"
        onSubmit={handlesubmit}
      >
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Nom</label>
            <input
              type="name"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Nom"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="name">Prénom</label>
            <input
              type="name"
              className="form-control"
              id="name"
              name="name"
              placeholder="Prénom"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password">password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="adressPartOne">Adresse</label>
          <input
            type="text"
            className="form-control"
            id="adressPartOne"
            name="adressPartOne"
            placeholder="Adresse"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="adressPartTwo">Partie 2</label>
          <input
            type="text"
            className="form-control"
            id="adressPartTwo"
            name="adressPartTwo"
            placeholder="Adresse 2"
            required
          />
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="city">Ville</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              placeholder="Ville"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="zip">Code postal</label>
            <input
              type="text"
              className="form-control"
              id="zip"
              name="zip"
              placeholder="Code postal"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-lg btn-primary submit-margin">
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
