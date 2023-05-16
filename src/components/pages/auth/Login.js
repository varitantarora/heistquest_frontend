import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const Login = () => {
  const authContext = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      authContext.login(values);
      resetForm();
    },
  });

  return (
    <div class="flex justify-center items-center h-screen">
      <div class="flex flex-col justify-center items-center w-full md:w-9/12">
        <div class="w-full text-gray-600 bg-white bg-opacity-40 md:w-1/3 md:p-16 ">
          <h1 class="text-2xl font-bold mb-4">Login</h1>
          <form class="flex flex-col" onSubmit={formik.handleSubmit}>
            <label for="email" class="mb-2 font-medium">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              class="w-full border border-gray-400 rounded py-2 px-3 mb-4 leading-tight focus:outline-none focus:ring"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div class="text-red-500 mb-4">{formik.errors.email}</div>
            ) : null}

            <label for="password" class="mb-2 font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              class="w-full border border-gray-400 rounded py-2 px-3 mb-4 leading-tight focus:outline-none focus:ring"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div class="text-red-500 mb-4">{formik.errors.password}</div>
            ) : null}

            <button
              type="submit"
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
