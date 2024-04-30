import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div class="row justify-content-center text-center mt-4">
        <div class="col-md-6">
          <h4>Log In</h4>
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            aria-label="First name"
          />
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Password"
            aria-label="First name"
          />
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-md-3 d-flex">
          <div className="existing-account">
            <span>
              <Link to={"/forgotpassword"}>Forgot Password?</Link>
            </span>
          </div>
        </div>
        <div class="col-md-3 justify-content-end">
          <div className=" d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col-md-6 text-center">
          <span>or</span>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col-md-3 d-flex">
          <div className="create-account">
            <span>For create an account </span>
            <span>
              <Link to={"/signup"}>Click Here</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
