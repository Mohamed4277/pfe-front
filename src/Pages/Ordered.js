import React from "react";
import { useNavigate } from "react-router-dom";

function Ordered() {
  const navigate = useNavigate();
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="col ordered-text">Merci pour vos achats</div>
          <div className="col ordered-button">
            <button
              type="button"
              id="return-to-home"
              className="btn btn-lg btn-success rounded-0"
              onClick={() => navigate("/home")}
            >
              Retour à la liste des produits
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ordered;
