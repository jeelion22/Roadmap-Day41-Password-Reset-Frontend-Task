import React from "react";
import { Link } from "react-router-dom";

const Resetpassword = () => {
  return (
    <>
      <div className="container-md-6  p-5">
        <div className="row">
          <div className="col">
            <div class="row justify-content-center text-center mt-4">
              <div class="col-md-6">
                <h4>Reset Password</h4>
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
              <div class="col-md-6 justify-content-end">
                <div className=" d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Reset Password
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

export default Resetpassword;
