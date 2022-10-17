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
            <nav className="mb-10 mb-md-0">
              <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                <a
                  className="list-group-item list-group-item-action dropend-toggle active"
                  href="account-orders.html"
                >
                  Orders
                </a>
                <a
                  className="list-group-item list-group-item-action dropend-toggle "
                  href="account-wishlist.html"
                >
                  Widhlist
                </a>
                <a
                  className="list-group-item list-group-item-action dropend-toggle "
                  href="account-personal-info.html"
                >
                  Personal Info
                </a>
                <a
                  className="list-group-item list-group-item-action dropend-toggle "
                  href="account-address.html"
                >
                  Addresses
                </a>
                <a
                  className="list-group-item list-group-item-action dropend-toggle "
                  href="account-payment.html"
                >
                  Payment Methods
                </a>
                <a
                  className="list-group-item list-group-item-action dropend-toggle"
                  href="#!"
                >
                  Logout
                </a>
              </div>
            </nav>
          </div>
          <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Form */}
            <form>
              <div className="row">
                <div className="col-12 col-md-6">
                  {/* Email */}
                  <div className="form-group">
                    <label className="form-label" for="accountFirstName">
                      First Name */
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
                  {/* Email */}
                  <div className="form-group">
                    <label className="form-label" for="accountLastName">
                      Last Name */
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
                  {/* Email */}
                  <div className="form-group">
                    <label className="form-label" for="accountEmail">
                      Email Address */
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
                  {/* Password */}
                  <div className="form-group">
                    <label className="form-label" for="accountPassword">
                      Current Password */
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
                  {/* Password */}
                  <div className="form-group">
                    <label className="form-label" for="AccountNewPassword">
                      New Password */
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
                  {/* Birthday */}
                  <div className="form-group">
                    {/* Label */}
                    <label className="form-label">Date of Birth</label>

                    {/* Inputs */}
                    <div className="row gx-5">
                      <div className="col-auto">
                        {/* Date */}
                        <label className="visually-hidden" for="accountDate">
                          Date
                        </label>
                        <select
                          className="form-select form-select-sm"
                          id="accountDate"
                        >
                          <option>10</option>
                          <option>11</option>
                          <option selected="">12</option>
                        </select>
                      </div>
                      <div className="col">
                        {/* Date */}
                        <label className="visually-hidden" for="accountMonth">
                          Month
                        </label>
                        <select
                          className="form-select form-select-sm"
                          id="accountMonth"
                        >
                          <option>January</option>
                          <option selected="">February</option>
                          <option>March</option>
                        </select>
                      </div>
                      <div className="col-auto">
                        {/* Date */}
                        <label className="visually-hidden" for="accountYear">
                          Year
                        </label>
                        <select
                          className="form-select form-select-sm"
                          id="accountYear"
                        >
                          <option>1990</option>
                          <option selected="">1991</option>
                          <option>1992</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  {/* Gender */}
                  <div className="form-group mb-8">
                    {/* Label */}
                    <label className="form-label">Gender</label>

                    {/* Inputs */}
                    <div>
                      {/* Male */}
                      <input
                        className="btn-check"
                        type="radio"
                        name="gender"
                        id="male"
                        checked=""
                      />
                      <label
                        className="btn btn-sm btn-outline-border"
                        for="male"
                      >
                        Male
                      </label>

                      {/* Female */}
                      <input
                        className="btn-check"
                        type="radio"
                        name="gender"
                        id="female"
                      />
                      <label
                        className="btn btn-sm btn-outline-border"
                        for="female"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  {/* Button */}
                  <button className="btn btn-dark" type="submit">
                    Save Changes
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
