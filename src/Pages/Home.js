import React, { useEffect, useState } from "react";
import Products from "../Components/Products";

function Home() {
  const [listProduct, setListProduct] = useState();
  const [valueToSearch, setValueToSearch] = useState();

  useEffect(() => {
    const url =
      valueToSearch && valueToSearch.length > 0
        ? "http://localhost:8080/api/product/search?name=" + valueToSearch
        : "http://localhost:8080/api/product";
    const token = localStorage.getItem("access_token");

    console.log('****** valueToSearch: ', valueToSearch)

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-Type": "application/json",
          },
        });
        const json = await response.json();
        console.log("***************: ", json);
        setListProduct(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [valueToSearch]);

  console.log("--------------: ", listProduct);

  return (
    <>
      <form
        class="container search-bar-margin"
        onSubmit={(event) => {
          event.preventDefault();
          setValueToSearch(event.target.searchValue.value);
        }}
      >
        <div className="row">
          <div class="col-8">
            <input
              type="text"
              className="form-control mt-1"
              placeholder="search"
              id="searchValue"
              name="searchValue"
            />
          </div>
          <div class="col-4">
            <button type="submit" class="btn btn-secondary btn-lg">
              Rechercher
            </button>
          </div>
        </div>
      </form>

      <Products listProduct={listProduct} />
    </>
  );
}

export default Home;
