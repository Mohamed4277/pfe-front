import React, {useState, useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function AdressForm() {
  const [nameAdress, setName] = useState("");
  const [lastNameAdress, setlastName] = useState("");
  const [adressPartOne, setAdressPartOne] = useState("");
  const [adressPartTwo, setAdressPartTwo] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [adressOption, setAdressOption]=useState();
  const [isSubmit,setIsSubmit]=useState(false);
  const params = useParams();
  const [adress,setAdress]=useState({})
  const navigate = useNavigate();
  const dispatch=useDispatch();

  useEffect(() => {
    const url =params.idAdress && "http://localhost:8080/api/adress/" + params.idAdress;
    const token =params.idAdress &&  localStorage.getItem("access_token");
    const fetchData =params.idAdress && (async () => {
      try {
        const response =url && await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-Type": "application/json",
          },
        });
        const json = await response.json();
        setAdress(json);
      } catch (error) {
        console.log("error", error);
      }
    });

    params.idAdress && fetchData();
  }, []);


  useEffect(() => {
    const {user}= JSON.parse(localStorage.getItem("persist:root"));
    const username=JSON.parse(user).username;
    const url = params.idAdress? 
                "http://localhost:8080/api/user/" + username + "/adress" + "/"+params.idAdress:           
                "http://localhost:8080/api/user/" + username + "/adress";
    const token = localStorage.getItem("access_token");
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-Type": "application/json",
          },
          method: params.idAdress? 'PUT':'POST',
          body:params.idAdress? JSON.stringify({
            id:params.idAdress,
            nameAdress,
            lastNameAdress,
            adressPartOne,
            adressPartTwo,
            zip,
            city,
            isDeliveryAdress:adressOption === "1"? true: false,
            isInvoiceAdress:adressOption === "0"? true: false
          }):JSON.stringify({
            nameAdress,
            lastNameAdress,
            adressPartOne,
            adressPartTwo,
            zip,
            city,
            isDeliveryAdress:adressOption === "1"? true: false,
            isInvoiceAdress:adressOption === "0"? true: false
          })
        });
        const json = await response.json();
        dispatch({type:"DISPLAY_ADRESS", payload:{adress:json}})
        navigate("/adress")
      } catch (error) {
        console.log("error", error);
      }
    };

    isSubmit && fetchData();
  }, [isSubmit]);

  
  const handlesubmit = (event) => {
    event.preventDefault();
    setAdressPartOne(event.target.adressPartOne.value);
    setAdressPartTwo(event.target.adressPartTwo.value);
    setCity(event.target.city.value);
    setZip(event.target.zip.value);
    setlastName(event.target.lastNameAdress.value);
    setName(event.target.nameAdress.value);
    setAdressOption(event.target.adressOption.value)
    setIsSubmit(true)
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
            id="lastNameAdress"
            name="lastNameAdress"
            placeholder="Nom"
            required
            defaultValue={params.idAdress && adress.lastNameAdress}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="nameAdress">Prénom</label>
          <input
            type="name"
            className="form-control rounded-0"
            id="nameAdress"
            name="namnameAdresse"
            placeholder="Prénom"
            required
            defaultValue={params.idAdress && adress.nameAdress}
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
      <select  id="adressOption" name="adressOption" className="form-select rounded-0 col-3">
            <option selected >Selectionner une option</option>
            <option value="1">Adresse livraison</option>
            <option value="0">Adresse facturation</option>
          </select>
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
