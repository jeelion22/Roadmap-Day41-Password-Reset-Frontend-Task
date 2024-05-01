import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import { signupValidationSchema } from "./signupValidationSchema";

const userInfo = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [user, setUser] = useState(userInfo);
  const navigateToLogin = useNavigate();
  return (
    <>
      <Formik
        initialValues={{ ...user }}
        validationSchema={signupValidationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const newValues = {};
          newValues.name = `${values.firstname} ${values.lastname}`;
          newValues.username = values.email;
          newValues.password = values.password;

          try {
            const response = await axios.post(
              "https://roadmap-day41-password-reset-backend-task.onrender.com/api/users/create",
              newValues,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            if (response.data) {
              toast.success("User created successfully!", {
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
            setUser(userInfo);
            setSubmitting(false);
          }
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="container-md-6  p-5">
              <div className="row">
                <div className="col">
                  <div className="row justify-content-center text-center mt-4">
                    <div className="col-md-6">
                      <h4>Sign Up</h4>
                    </div>
                  </div>

                  <div className="row justify-content-center mt-4">
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        aria-label="firstname"
                        id="firstname"
                        {...formik.getFieldProps("firstname")}
                      />
                      {formik.touched.firstname && formik.errors.firstname ? (
                        <div>{formik.errors.firstname}</div>
                      ) : null}
                    </div>
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="lastname"
                        id="lastname"
                        {...formik.getFieldProps("lastname")}
                      />
                      {formik.touched.lastname && formik.errors.lastname ? (
                        <div>{formik.errors.lastname}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="row justify-content-center mt-3">
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        aria-label="email"
                        id="email"
                        {...formik.getFieldProps("email")}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="row justify-content-center mt-3">
                    <div className="col-md-6">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        aria-label="password"
                        id="password"
                        {...formik.getFieldProps("password")}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* <div className="row justify-content-center mt-3">
                  <div className="col-md-6">
                    <ul>
                      <li> Password should be at least 8 characters long</li>
                      <li>
                        {" "}
                        Incorporate uppercase letters, lowercase letters,
                        numbers, and symbols
                      </li>
                    </ul>
                  </div>
                </div> */}

                  <div className="row justify-content-center mt-3">
                    <div className="col-md-6">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        aria-label="confirmPassword"
                        id="confirmPassword"
                        {...formik.getFieldProps("confirmPassword")}
                      />
                      {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword ? (
                        <div>{formik.errors.confirmPassword}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="row justify-content-center mt-3">
                    <div className="col-md-3 d-flex">
                      <div className="existing-account">
                        <span>Already have an account? </span>
                        <span>
                          <Link to={"/login"}>Log In</Link>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-3 justify-content-end">
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

export default Signup;
