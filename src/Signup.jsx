import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="container-md-6  p-5">
        <div className="row">
          <div className="col">
            <div class="row justify-content-center text-center mt-4">
              <div class="col-md-6">
                <h4>Sign Up</h4>
              </div>
            </div>

            <div class="row justify-content-center mt-4">
              <div class="col-md-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div class="col-md-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
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
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Confirm Password"
                  aria-label="First name"
                />
              </div>
            </div>
            <div class="row justify-content-center mt-3">
              <div class="col-md-3 d-flex">
                <div className="existing-account">
                  <span>Already have an account? </span>
                  <span>
                    <Link to={"/login"}>Log In</Link>
                  </span>
                </div>
              </div>
              <div class="col-md-3 justify-content-end">
                <div className=" d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Signup;
