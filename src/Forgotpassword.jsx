import React from "react";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
  return (
    <>
      <div class="row justify-content-center text-center mt-4">
        <div class="col-md-6">
          <h4>Forgot Password</h4>
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your registered email address"
            aria-label="First name"
          />
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-md-6">
          <div className=" d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Send Reset Link
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
            <span>For login you account </span>
            <span>
              <Link to={"/login"}>Click Here</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;
