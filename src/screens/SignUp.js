import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

const SignUp = () => {
  const naviagte = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/createUser",
        { name, password, location, email }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setLocation("");
        naviagte("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message, "Error while submitting Form");
    }
  };
  return (
    <div>
      <Navbar />

      <div className="container signupForm">
        <h3 className="m-2">Register Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="Password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              id="Email"
              placeholder="Enter Your Location"
              required
            />
          </div>
          <button type="submit" className="btn btn-danger ">
            Submit
          </button>
          <Link to="/login">
            <button type="submit" className="btn btn-success m-3">
              Already user
            </button>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
