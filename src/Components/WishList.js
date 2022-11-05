import React, { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import data from "../Data";
import Card from "./Card"
import { useSelector } from "react-redux";

function WishList() {
  const {wishList}=useSelector((state)=>state)
  
  const dispatch = useDispatch();
  useEffect(() => {
    const url = "http://localhost:8080/api/users";
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
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>

        <div className="row text-center mb-5">
          <h4>Liste de souhaits</h4>
        </div>
   
          {wishList &&
          wishList.length > 0 &&
          wishList.map((product) => {
            return (
              <Card product={product} addItem={() =>
                dispatch({
                  type: "ADD_ITEM_IN_BASKET",
                  payload: { ...product, quantity: 1 },
                })}/>
            );
          })}

    </>
  );
}

export default WishList;
