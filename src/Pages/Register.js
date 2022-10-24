import React, { useState, useEffect, useLayoutEffect } from "react";
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

  useLayoutEffect(() => {
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
    if (email.length > 0) {
      fetchData();
    }
  }, [email, password]);

  return (
    <div className="container">
      <h3 className="Auth-form-title margin-title">MyBookStore.</h3>
      <form
        className="container"
        onSubmit={(event) => {
          event.preventDefault();
          setEmail(event.target.email.value);
          setPassword(event.target.password.value);
          setAdressPartOne(event.target.adressPartOne.value);
          setAdressPartTwo(event.target.adressPartTwo.value);
          setCity(event.target.city.value);
          setZip(event.target.zip.value);
          setlastName(event.target.lastName.value);
          setName(event.target.name.value);
        }}
      >
        <div class="row">
          <div class="form-group col-md-6">
            <label>Nom</label>
            <input
              type="name"
              class="form-control"
              id="lastName"
              name="lastName"
              placeholder="Nom"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Prénom</label>
            <input
              type="name"
              class="form-control"
              id="name"
              name="name"
              placeholder="Prénom"
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Adresse</label>
          <input
            type="text"
            class="form-control"
            id="adressPartOne"
            name="adressPartOne"
            placeholder="Adresse"
          />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Adresse 2</label>
          <input
            type="text"
            class="form-control"
            id="adressPartTwo"
            name="adressPartTwo"
            placeholder="Adresse 2"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Ville</label>
            <input
              type="text"
              class="form-control"
              id="city"
              name="city"
              placeholder="Ville"
            />
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Code postal</label>
            <input
              type="text"
              class="form-control"
              id="zip"
              name="zip"
              placeholder="Code postal"
            />
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-lg btn-primary submit-margin">
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
