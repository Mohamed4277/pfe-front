import React, { useEffect, useState } from "react";
import PersonInformation from "../Components/PersonInformation";
import Adresses from "../Components/Adresses";
import WishList from "../Components/WishList";
import Order from "../Components/Order";
import PaymentMode from "../Components/PaymentMode";

function MyAcount() {
  const [isInformationDisplay, setIsInformationDisplay] = useState(false);
  const [isAdressDisplay, setIsAdressDisplay] = useState(false);
  const [isWishListDisplay, setIsWishListDisplay] = useState(false);
  const [isOrderDisplay, setIsOrderDisplay] = useState(false);
  const [isPaymentOrderDisplay, setIsPaymentOrderDisplay] = useState(false);

  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="mb-10">My Account</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  onClick={() => {
                    setIsInformationDisplay(false);
                    setIsAdressDisplay(false);
                    setIsWishListDisplay(false);
                    setIsOrderDisplay(true);
                    setIsPaymentOrderDisplay(false);
                  }}
                  href="#"
                >
                  Commandes
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  onClick={() => {
                    setIsInformationDisplay(false);
                    setIsAdressDisplay(false);
                    setIsWishListDisplay(true);
                    setIsOrderDisplay(false);
                    setIsPaymentOrderDisplay(false);
                  }}
                  href="#"
                >
                  Liste de souhaits
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  onClick={() => {
                    setIsInformationDisplay(true);
                    setIsAdressDisplay(false);
                    setIsWishListDisplay(false);
                    setIsOrderDisplay(false);
                    setIsPaymentOrderDisplay(false);
                  }}
                  href="#"
                >
                  Information personnelle
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  onClick={() => {
                    setIsInformationDisplay(false);
                    setIsAdressDisplay(true);
                    setIsWishListDisplay(false);
                    setIsOrderDisplay(false);
                    setIsPaymentOrderDisplay(false);
                  }}
                  href="#"
                >
                  Adresses
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  onClick={() => {
                    setIsInformationDisplay(false);
                    setIsAdressDisplay(false);
                    setIsWishListDisplay(false);
                    setIsOrderDisplay(false);
                    setIsPaymentOrderDisplay(true);
                  }}
                  href="#"
                >
                  Methodes de payements
                </a>
              </li>
            </ul>
          </div>
          {isOrderDisplay && <Order />}
          {isInformationDisplay && <PersonInformation />}
          {isAdressDisplay && <Adresses />}
          {isWishListDisplay && <WishList />}
          {isPaymentOrderDisplay && <PaymentMode />}
        </div>
      </div>
    </section>
  );
}

export default MyAcount;
