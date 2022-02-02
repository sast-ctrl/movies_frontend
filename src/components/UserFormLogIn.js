import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../App";

const UserFormLogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChanged = (event) => {
    setUsername(event.target.value);
  };

  const passwordChanged = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    login();
  };

  const addInvalidMsg = () => {
    Array.from(document.querySelectorAll(".form-control")).forEach((el) =>
      el.classList.add("is-invalid")
    );
  };
  const removeInvalidMsg = () => {
    Array.from(document.querySelectorAll(".form-control")).forEach((el) =>
      el.classList.remove("is-invalid")
    );
  };

  const login = async () => {
    removeInvalidMsg();

    try {
      const data = {
        username,
        password,
      };

      const result = await axios.post(`${API_URL}/token/`, data);

      const access = result.data.access;
      const refresh = result.data.refresh;

      localStorage.setItem("jwt-token", access);
      localStorage.setItem("jwt-refresh", refresh);

      window.location.href = "/";
    } catch (error) {
      addInvalidMsg();
      console.error(`Error login: ${error}`);
    }
  };

  return (
    <>
      <hr className="mt-5" />

      <div className="row">
        <div className="col-12 col-lg-6 my-4">
          <h1 className="mb-4 background-title">
            {" "}
            <span>Log in</span>{" "}
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="inputUsername">Username</label>
              <input
                onChange={usernameChanged}
                type={"text"}
                className="form-control"
                id="inputUsername"
                placeholder="username"
                required
              />
              <div className="invalid-feedback"> Invalid Credetentials </div>
            </div>

            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input
                onChange={passwordChanged}
                type={"password"}
                className="form-control"
                id="inputPassword"
                placeholder="password"
                required
              />
              <div className="invalid-feedback"> Invalid Credetentials </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              {" "}
              Log in{" "}
            </button>
          </form>
        </div>

        <div className="col-12 col-lg-6">
          <img
            src="https://image.freepik.com/free-vector/key_53876-59981.jpg?w=826"
            alt="Key image"
            className="login-key"
          />
        </div>
      </div>

      <hr className="mt-5" />
    </>
  );
};

export default UserFormLogIn;
