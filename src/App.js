import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home.js";
import Details from "./pages/Details.js";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export const API_URL = "https://movies-backend-ns.herokuapp.com/api";
const App = () => {
  // jwt token
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("jwt-token")) setIsAuth(true);
  }, []);

  const logOut = () => {
    localStorage.removeItem("jwt-token");
    window.location.href = "/";
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Movies App
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {!isAuth && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/log-in" className="nav-link">
                  Log in
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sign-up" className="nav-link">
                  Sign up
                </Link>
              </li>
            </ul>
          )}

          {isAuth && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link onClick={logOut} to="" className="nav-link">
                  Log out
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <main className="App">
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movies/:slug" element={<Details />} />

            <Route path="/log-in" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
