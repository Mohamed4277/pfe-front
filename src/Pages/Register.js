import React from "react";

function Register() {
  return (
    <div className="container">
      <h3 className="Auth-form-title margin-title">MyBookStore.</h3>
      <form className="container">
        <div class="row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Nom</label>
            <input
              type="name"
              class="form-control"
              id="nom"
              placeholder="Nom"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Prénom</label>
            <input
              type="surname"
              class="form-control"
              id=""
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
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Adresse</label>
          <input
            type="text"
            class="form-control"
            id="adress"
            placeholder="Adresse"
          />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Adresse 2</label>
          <input
            type="text"
            class="form-control"
            id="adresscomplement"
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
              placeholder="Ville"
            />
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Code postal</label>
            <input
              type="text"
              class="form-control"
              id="zip"
              placeholder="Code postal"
            />
          </div>
        </div>
        <div class="form-group">
          <button
            type="button"
            class="btn btn-lg btn-primary submit-margin"
            disabled
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
