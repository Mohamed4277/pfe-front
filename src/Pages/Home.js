import React from "react";
import Products from "../Components/Products";

function Home() {
  return (
    <>
      <form class="container search-bar-margin">
        <div className="row">
          <div class="col-8">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Rechercher"
            />
          </div>
          <div class="col-4">
            <button type="button" class="btn btn-secondary btn-lg" disabled>
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
