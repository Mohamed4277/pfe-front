import React, { useState} from "react";
import {  useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function AdressForm(props) {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [adressPartOne, setAdressPartOne] = useState("");
  const [adressPartTwo, setAdressPartTwo] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const params = useParams();
  const [adress]=useSelector((state)=>state.adress.filter(adr=>adr.id==params.idAdress))
  const user=useSelector((state)=>state.user)
  
  const handlesubmit = (event) => {
    event.preventDefault();
    setAdressPartOne(event.target.adressPartOne.value);
    setAdressPartTwo(event.target.adressPartTwo.value);
    setCity(event.target.city.value);
    setZip(event.target.zip.value);
    setlastName(event.target.lastName.value);
    setName(event.target.name.value);
  }
  return (
    <>  
    <h4 className="text-center">Adresse</h4>  
    <div className="Auth-form-container">
    <form
      className=".Auth-form"
      onSubmit={handlesubmit}
    >
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="lastName">Nom</label>
          <input
            type="name"
            className="form-control rounded-0"
            id="lastName"
            name="lastName"
            placeholder="Nom"
            required
            defaultValue={params.idAdress && user && user.lastName}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="name">Prénom</label>
          <input
            type="name"
            className="form-control rounded-0"
            id="name"
            name="name"
            placeholder="Prénom"
            required
            defaultValue={params.idAdress && user && user.name}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="adressPartOne">Adresse</label>
        <input
          type="text"
          className="form-control rounded-0"
          id="adressPartOne"
          name="adressPartOne"
          placeholder="Adresse"
          required
          defaultValue={params.idAdress && adress && adress.adressPartOne}
        />
      </div>
      <div className="form-group">
        <label htmlFor="adressPartTwo">Partie 2</label>
        <input
          type="text"
          className="form-control rounded-0"
          id="adressPartTwo"
          name="adressPartTwo"
          placeholder="Adresse 2"
          required
          defaultValue={params.idAdress && adress && adress.adressPartTwo}
        />
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="city">Ville</label>
          <input
            type="text"
            className="form-control rounded-0"
            id="city"
            name="city"
            placeholder="Ville"
            required
            defaultValue={params.idAdress && adress && adress.city}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="zip">Code postal</label>
          <input
            type="text"
            className="form-control rounded-0"
            id="zip"
            name="zip"
            placeholder="Code postal"
            required
            defaultValue={params.idAdress && adress && adress.zip}
          />
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-lg btn-primary rounded-0">
          Soumettre
        </button>
      </div>
    </form>
  </div>
  </>

  );
}

export default AdressForm;
