import React, {useEffect, useState} from 'react';
import { useDispatch } from "react-redux";
import Card from "./Card"
import { useSelector } from "react-redux";
import { Postage } from 'react-bootstrap-icons';

function Products() {
  const dispatch = useDispatch();
  const {product:listProduct}= useSelector((state)=>state)
  const [productToAdd, setProductToAdd]=useState({})
  useEffect(() => {
    const {user}= JSON.parse(localStorage.getItem("persist:root"));
    const username=JSON.parse(user).username;
    const url = "http://localhost:8080/api/user/" + username + "/wish-list";
    const token = localStorage.getItem("access_token");
    const fetchData =productToAdd && ( async () => {
      try {
        const response =productToAdd && (await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            id:productToAdd.id
          }),
          method: "POST"
        }));
        const json =productToAdd && await response.json();
        console.log('******vvvvvvvvvv**********: ', json.product);
        productToAdd && dispatch({type:"ADD_PRODUCT_TO_WISH_LIST", payload:json.product})
      } catch (error) {
        console.log("error", error);
      }
    });

    productToAdd && fetchData();
  }, [productToAdd]);

console.log("****************: ", productToAdd)

  return (
    <>
      { listProduct &&
        listProduct.length > 0 &&
        listProduct.map((product) => {
          return (
            <Card product={product} addItem={() =>
              dispatch({
                type: "ADD_ITEM_IN_BASKET",
                payload: { ...product, quantity: 1 },
              })}
              addToWishList={()=>{setProductToAdd(product)}}
              />
          );
        })}
    </>
  );
}

export default Products;
