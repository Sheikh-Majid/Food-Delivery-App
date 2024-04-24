import React, { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/loginUser",
        { password, email }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("userToken", response.data.token);
       // console.log(localStorage.getItem("userToken"));
        setEmail("");
        setPassword("");
        navigate("/");
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
      
      <div className="conatiner loginForm">
        <h3 className="mb-2">Login Form</h3>
        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-danger ">
            Submit
          </button>
          <Link to="/signup">
            <button type="submit" className="btn btn-success m-3">
              New user
            </button>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
