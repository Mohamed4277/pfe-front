import React, { useEffect, useState } from "react";
import { Pen, Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";


function Adresses() {
  const [idToDelete,setIdToDelete]=useState("");
  const dispatch=useDispatch();
  const { adress}=useSelector((state)=>state)

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
        dispatch({type:"GET_ADRESSES", payload:json.adresses})
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  

  useEffect(() => {
    const url =idToDelete && "http://localhost:8080/api/adress/" + idToDelete;
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
        dispatch({type:"DELETE_ADRESS", payload:{id:idToDelete}})
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
          <h4>Adresses</h4>
        </div>
        <div className="row">
          <div className="col-12">
          <Link to={"/adressForm"}>          
            <button className="col-2 btn btn-primary btn-lg rounded-0 mb-3">
              Ajouter une adresse
            </button>
          </Link>
            {adress && adress.map((adress) => (
              <>
                <div className="card card-lg bg-light mb-8 rounded-0 mb-3">
                  <div className="card-body">
                    <div className="row">
                        <div className="col-6">                    
                          <h6 className="mb-6">
                          {adress.isInvoiceAdress
                            ? "Adresse de livraison"
                            : "Adresse"}
                          </h6>
                        </div>
                      <div className="col-6 text-end">                
                      <button className="btn btn-lg  button-margin" >
                      <Link to={"/adress/"+ adress.id}><Pen size={20} /></Link>
                      </button>
                      <button onClick={()=>{setIdToDelete(adress.id)}} className="btn btn-lg  button-margin">
                        <Trash size={20} />
                      </button>
                   </div>
                  </div>
                    <div className="text-muted">
                      <div>
                        {adress.nameAdress} {adress.lastNameAdress}
                      </div>
                      <div>{adress.adressPartOne}</div>
                      <div>{adress.adressPartTwo}</div>
                      <div>
                        {adress.zip} {adress.city}
                      </div>
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

export default Adresses;
