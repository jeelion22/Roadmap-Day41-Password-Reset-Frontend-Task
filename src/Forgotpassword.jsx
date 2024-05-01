import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const navigateToLogin = useNavigate();
  return (
    <>
      <Formik
        initialValues={{ username: email }}
        validationSchema={Yup.object({
          username: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const forgotPassword = await axios.post(
              "https://roadmap-day41-password-reset-backend-task.onrender.com/api/users/forgetPassword",
              values
            );
            if (forgotPassword.data) {
              toast.success(forgotPassword.data.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              });
              setTimeout(() => {
                navigateToLogin("/login");
              }, 5000);
            }
          } catch (error) {
            toast.error(
              `Error: ${
                error.response ? error.response.data.message : error.message
              }`,
              {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
              }
            );
          } finally {
            resetForm();
            setEmail("");
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
                    Send Password Reset Link
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};

export default Forgotpassword;
