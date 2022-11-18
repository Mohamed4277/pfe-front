import React, { useEffect, useState } from "react";
import Products from "../Components/Products";
import { useDispatch } from "react-redux";

function Home() {
  const [valueToSearch, setValueToSearch] = useState();
  const dispatch=useDispatch();
  useEffect(() => {
    const url =
      valueToSearch && valueToSearch.length > 0
        ? "http://localhost:8080/api/product/search?name=" + valueToSearch
        : "http://localhost:8080/api/product";
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
        dispatch({type:"GET_PRODUCTS", payload:json})
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [valueToSearch]);


  return (
    <>
      <form
        className="container search-bar-margin"
        onSubmit={(event) => {
          event.preventDefault();
          setValueToSearch(event.target.searchValue.value);
        }}
      >
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              className="form-control mt-1 rounded-0"
              placeholder="Rechercher"
              id="searchValue"
              name="searchValue"
            />
          </div>
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-lg rounded-0">
              Rechercher
            </button>
          </div>
        </div>
      </form>

      <Products />
    </>
  );
}

export default Home;
