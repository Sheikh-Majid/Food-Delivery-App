import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer className="py-3 my-4 ">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link px-2 text-muted">
              About
            </Link>
          </li>
        </ul>

        <div className="text-center">
          <p className=" text-muted">© 2024 GoFood, INDIA </p>
          <p classname="text-center">Made By Sheikh Majid</p>
        </div>
      </footer>
    </div>
  );
};
