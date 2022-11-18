import React, { useEffect,useParam, useState } from "react";
import { Heart } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

  //Get Image from folder
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

function Product(){
  const params = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const [isWishList,setIsWishList] = useState(false);

  const images = importAll(
    require.context("../Images", false, /\.(png|jpe?g|svg)$/)
  );

  useEffect(() => {
    const url = "http://localhost:8080/api/product/" + params.idProduct;
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
        setProduct(json)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const {user}= JSON.parse(localStorage.getItem("persist:root"));
    const username=JSON.parse(user).username;
    const url = "http://localhost:8080/api/user/" + username + "/wish-list";
    const token = localStorage.getItem("access_token");
    const fetchData =product && ( async () => {
      try {
        const response =product && (await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            id:product.id
          }),
          method: "POST"
        }));
        const json =product && await response.json();
        product && dispatch({type:"ADD_PRODUCT_TO_WISH_LIST", payload:json.product})
      } catch (error) {
        console.log("error", error);
      }
    });

    isWishList && fetchData();
  }, [isWishList]);
  

    return (
    <>
    <div className="row ms-3">  
       <div className="col-4">
        <div className="row">
        <img
                      src={images[product.image]}
                      width={280}

                    />

        <div className="col-10">
        <button
                          type="button"
                          className="col-12 btn mt-4 mb-4 btn-lg btn-primary rounded-0"
                          onClick={()=> dispatch({
                            type: "ADD_ITEM_IN_BASKET",
                            payload: { ...product, quantity: 1 },
                          })}
                        >
                          Ajouter au panier
                        </button>
        </div>
        <div className="col-2">
            <button
                            type="button"
                            className="btn mt-4 mb-4 btn-lg rounded-0 btn btn-outline-secondary"
                            onClick={()=>setIsWishList(true)}
                            >
                            <Heart size={20} />
            </button>
        </div>
        </div>
       
       </div>              
       <div className="col-7">
            <h5 className="row ">{product.name}</h5>
            <div className="row">Auteur: {product.autor} </div>
            <div className="row">Editeur: {product.edition} </div>
            <div className="row">Date de parution: {product.date}  </div>
            <h5 className="row ">Description</h5>
            <div className="row ">{product.description}</div>
       </div>
    </div>
    </>)
}

export default Product;

