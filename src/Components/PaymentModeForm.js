import React, { useState} from "react";
import {  useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function PaymentModeForm(props) {
  const params = useParams();
  const [paymentMode]=useSelector((state)=>state.paymentMode.filter(pay=>pay.id==params.idPaymentMode))

  console.log('222222222222222222',{params,paymentMode })

  const handlesubmit = (event) => {
    event.preventDefault();
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
          <Link to={"/payment-mode"}>          
            <button class="col-12 btn btn-primary btn-lg rounded-0">
              Soumettre
            </button>
          </Link>
        </div>
      </form>
    </div>
    </>

  );
}

export default PaymentModeForm;
