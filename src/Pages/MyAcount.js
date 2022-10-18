import React from "react";

function MyAcount() {
  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="mb-10">My Account</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Commandes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Liste de souhaits
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Information personnelle
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Adresses
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Methodes de payements
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <form>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label" for="accountFirstName">
                      Prénom
                    </label>
                    <input
                      className="form-control form-control-sm"
                      id="accountFirstName"
                      type="text"
                      placeholder="First Name */"
                      value="Daniel"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label" for="accountLastName">
                      Nom
                    </label>
                    <input
                      className="form-control form-control-sm"
                      id="accountLastName"
                      type="text"
                      placeholder="Last Name */"
                      value="Robinson"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label" for="accountEmail">
                      Adresse mail
                    </label>
                    <input
                      className="form-control form-control-sm"
                      id="accountEmail"
                      type="email"
                      placeholder="Email Address */"
                      value="user@email.com"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label" for="accountPassword">
                      Password actuel
                    </label>
                    <input
                      className="form-control form-control-sm"
                      id="accountPassword"
                      type="password"
                      placeholder="Current Password */"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label" for="AccountNewPassword">
                      Nouveau password
                    </label>
                    <input
                      className="form-control form-control-sm"
                      id="AccountNewPassword"
                      type="password"
                      placeholder="New Password */"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label className="form-label">Date</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label className="form-label">Genre</label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="button" class="btn btn-lg btn-primary">
                    Sauvegarder
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAcount;
