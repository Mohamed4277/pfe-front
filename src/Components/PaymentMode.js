import React, { useEffect, useState} from "react";
import { Pen, Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

function PaymentMode() {
  const [idToDelete,setIdToDelete]=useState("");
  const dispatch=useDispatch();
  const {paymentMode}=useSelector((state)=>state)


  useEffect(() => {
    const {user}= JSON.parse(localStorage.getItem("persist:root"));
    const userId=JSON.parse(user).id;
    const url = "http://localhost:8080/api/user/user-by-id/" +userId;
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
        dispatch({type:"GET_PAYMENT_MODE", payload:json.paymentMode})
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const url =idToDelete && "http://localhost:8080/api/payment-mode/" + idToDelete;
    const token =idToDelete &&  localStorage.getItem("access_token");
    const fetchData =idToDelete &&  (async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-Type": "application/json",
          },
          method: "DELETE",
        });
        //const json = await response.json();
        dispatch({type:"DELETE_PAYMENT_MODE", payload:{id:idToDelete}})
      } catch (error) {
        console.log("error", error);
      }
    });
    idToDelete && fetchData();
  }, [idToDelete]);
  
  return (
    <>
      <div className="container">
        <div className="row text-center mb-5">
          <h4>Mode de payements</h4>
        </div>
        <div className="row">
          <div className="col-12">
          <Link to={"/payment-mode-form"}>          
            <button className="col-2 btn btn-primary btn-lg rounded-0 mb-3">
              Ajouter une carte
            </button>
          </Link>
            {paymentMode && paymentMode.map((card) => (
              <>
                <div className="card card-lg bg-light mb-8 rounded-0 mb-3">
                  <div className="card-body ">
                  <div className="row">
                        <div className="col-6">                    
                          <h6 className="mb-6">
                          {card.name}
                          </h6>
                        </div>
                      <div className="col-6 text-end">                
                      <button className="btn btn-lg  button-margin" >
                      <Link to={"/payment-mode-form/"+ card.id}><Pen size={20} /></Link>
                      </button>
                      <button onClick={()=>{setIdToDelete(card.id)}} className="btn btn-lg  button-margin">
                        <Trash size={20} />
                      </button>
                      </div>
                   </div>
                    <div className="text-muted">
                      <div>{card.cardType}</div>
                      <div>{card.cardNumber}</div>
                      <div>{card.codeSecret}</div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentMode;
