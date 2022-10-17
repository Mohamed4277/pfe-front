import React from "react";
import Products from "../Components/Products";
import { Cart2, Power, Person } from "react-bootstrap-icons";

function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MyBookStore.
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catalogue
                </a>
              </li>
            </ul>
            <div className="container nav-bar-align-end">
              <div className="col">
                <button className="btn btn-lg  button-margin">
                  <div className="d-inline">0</div>
                  <Cart2 size={20} />
                </button>
                <button className="btn btn-lg button-margin">
                  <Person size={20} />
                </button>
                <button className="btn btn-lg button-margin">
                  <Power size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

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
