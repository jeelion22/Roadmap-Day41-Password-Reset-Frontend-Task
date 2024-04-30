import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

const Forgotpassword = () => {
  const [email, setEmail] = useState({ email: "" });
  return (
    <Formik
      initialValues={{ ...email }}
      validationSchema={Yup.object({
        username: Yup.string()
          .email("Invalid email address")
          .required("Required"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        try {
          const forgotPassword = await axios.post(
            "https://roadmap-day41-password-reset-backend-task.onrender.com/api/users/forgetPassword",
            values
          );
          setTimeout(() => {
            alert(JSON.stringify(forgotPassword.data, null, 2));
          }, 100);
        } catch (error) {
          console.error("Request failed:", error.response || error.message);
          alert(
            `Error: ${
              error.response ? error.response.data.message : error.message
            }`
          );
        } finally {
          setEmail({ email: "" });
          setSubmitting(false);
        }
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div className="row justify-content-center text-center mt-4">
            <div className="col-md-6">
              <h4>Forgot Password</h4>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your registered email address"
                aria-label="username"
                id="username"
                {...formik.getFieldProps("username")}
              />

              {formik.touched.username && formik.errors.username ? (
                <div className="email mt-2">{formik.errors.username}</div>
              ) : null}
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-md-6">
              <div className=" d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Send Reset Link
                </button>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-md-6 text-center">
              <span>or</span>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-md-3 d-flex">
              <div className="create-account">
                <span>For login your account </span>
                <span>
                  <Link to={"/login"}>Click Here</Link>
                </span>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Forgotpassword;
