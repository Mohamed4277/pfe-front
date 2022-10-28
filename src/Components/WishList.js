import React, { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import data from "../Data";
import Card from "./Card"

function WishList() {
  const [myAdresses, setMyAdresses] = useState({});
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
        setMyAdresses(json[0]);
        console.log("", json[0]);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  const { whishList } = data;
  return (
    <>
      <div class="container">
      <div className="row text-center mb-5">
          <h4>Liste de souhaits</h4>
        </div>
      <div class="row">
          <div class="col-12">
          {whishList &&
          whishList.length > 0 &&
          whishList.map((product) => {
            return (
              <Card product={product} addItem={() =>
                dispatch({
                  type: "ADD_ITEM_IN_BASKET",
                  payload: { ...product, quantity: 1 },
                })}/>
            );
          })}
          </div>
      </div>
      </div>
    </>
  );
}

export default WishList;
