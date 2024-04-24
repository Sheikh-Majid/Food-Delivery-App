import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";

export const Navbar = () => {
  const navigate = useNavigate();
  const categorie = useCategories();
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-success ">
        <div className="container-fluid  ">
          <Link className="navbar-brand fs-3 fst-italic" to="/">
            NextFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              {localStorage.getItem("userToken") ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active fs-5"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link  fs-5"
                      aria-current="page"
                      to="/myorder"
                    >
                      MyOrder
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
              )}
            </ul>

            <div className="d-flex ">
              {localStorage.getItem("userToken") ? (
                <>
                  <div
                    className="btn bg-white text-danger me-3 "
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                  <Link
                    to="/mycart"
                    className="btn bg-white text-success me-3 "
                  >
                    MyCart
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="btn bg-white text-success fs-5 me-2 mb-1"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="btn bg-white text-success fs-5 me-2 mb-1"
                    to="/signup"
                  >
                    SignUp
                  </Link>
                </>
              )}

              <div className="dropdown me-2">
                <button
                  className="btn bg-white text-success dropdown-toggle fs-5 me-2 mb-1"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Items
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Items
                    </Link>
                  </li>
                  {categorie.map((items) => (
                    <li key={items.id}>{items.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
