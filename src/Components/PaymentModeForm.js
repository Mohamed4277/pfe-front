import React,{useEffect, useState} from "react";
import {  useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function PaymentModeForm(props) {
  const params = useParams();
  const [paymentMode,setPaymentMode]=useState({})
  const [name, setName]=useState("");
  const [cardType,setCardType]=useState("");
  const [cardNumber,setCardNumber]=useState("");
  const [codeSecret, setCodeSecret]=useState("");
  const [carteOption, setCarteOption]=useState();
  const [isSubmit,setIsSubmit]=useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const url =params.idPaymentMode && "http://localhost:8080/api/payment-mode/" + params.idPaymentMode;
    const token =params.idPaymentMode &&  localStorage.getItem("access_token");
    const fetchData =params.idPaymentMode && (async () => {
      try {
        const response =url && await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-Type": "application/json",
          },
        });
        const json = await response.json();
        setPaymentMode(json)
      } catch (error) {
        console.log("error", error);
      }
    });

    params.idPaymentMode && fetchData();
  }, []);


  useEffect(() => {
    const {user}= JSON.parse(localStorage.getItem("persist:root"));
    const username=JSON.parse(user).username;
    const url = params.idPaymentMode? 
                "http://localhost:8080/api/user/" + username + "/payment-mode" + "/"+params.idPaymentMode:           
                "http://localhost:8080/api/user/" + username + "/payment-mode";
    const token = localStorage.getItem("access_token");
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-Type": "application/json",
          },
          method: params.idPaymentMode? 'PUT':'POST',
          body:params.idPaymentMode? JSON.stringify({
            id:params.idPaymentMode,
            name,
            cardType,
            cardNumber,
            codeSecret,
            isCreditCardToUse: carteOption === "1"?true:false
          }):JSON.stringify({
            name,
            cardType,
            cardNumber,
            codeSecret,
            isCreditCardToUse: carteOption === "1"?true:false
          })
        });
        const json = await response.json();
        dispatch({type:"DISPLAY_PAYMENT_MODE", payload:{paymentMode:json}})
        navigate(-1)
      } catch (error) {
        console.log("error", error);
      }
    };

    isSubmit && fetchData();
  }, [isSubmit]);

  const handlesubmit = (event) => {
    event.preventDefault();
    setCodeSecret(event.target.codeSecret.value);
    setCardNumber(event.target.cardNumber.value);
    setCardType(event.target.cardType.value);
    setName(event.target.name.value);
    setCarteOption(event.target.carteOption.value)
    setIsSubmit(true)
  }
  return (
    <>    
    <h4 className="text-center">Mode de paiement</h4>  
    <div className="Auth-form-container">
      <form
        className=".Auth-form"
        onSubmit={handlesubmit}
      >
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Nom de la carte</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="name"
              name="name"
              placeholder="Nom de la carte"
              required
              defaultValue={params.idPaymentMode && paymentMode && paymentMode.name}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="cardType">Type de carte</label>
            <input
              type="name"
              className="form-control rounded-0"
              id="cardType"
              name="cardType"
              placeholder="Type de carte"
              required
              defaultValue={params.idPaymentMode && paymentMode && paymentMode.cardType}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-9">
            <label htmlFor="cardNumber">Numéro de la carte</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="cardNumber"
              name="cardNumber"
              placeholder="Numéro de la carte"
              required
              defaultValue={params.idPaymentMode && paymentMode && paymentMode.cardNumber}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="codeSecret">Code Pin</label>
            <input
              type="password"
              className="form-control rounded-0"
              id="codeSecret"
              name="codeSecret"
              placeholder="Code Pin"
              required
              defaultValue={params.idPaymentMode && paymentMode && paymentMode.codeSecret}
            />
          </div>  
          <div className="mb-3 col-6">
          <select  id="carteOption" name="carteOption" className="form-select rounded-0 col-3">
            <option selected >Selectionner une option</option>
            <option value="1">Principale carte</option>
            <option value="0">Carte secondaire</option>
          </select>
          </div> 
          <div className="col-12">            
          <button  type="submit" class="btn btn-primary btn-lg rounded-0">
              Soumettre
            </button>
          </div>      
        </div>
      </form>
    </div>
    </>

  );
}

export default PaymentModeForm;
