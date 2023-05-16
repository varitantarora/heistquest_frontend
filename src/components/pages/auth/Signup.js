import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen">
      <div className=" text-gray-500 md:w-1/3 py-16 px-16 bg-white bg-opacity-30">
        <h1 className="text-3xl font-bold mb-5">Registration</h1>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string()
              .min(8, 'Password must be at least 8 characters')
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            axios
              .post(`https://heistquest.vercel.app/api/auth/register`, values)
              .then((response) => {
                alert('Registration successful. Please log in.');
                resetForm();
              })
              .catch((error) => {
                console.log(error.response.data);
                alert(error.response.data);
              })
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 font-bold">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="w-full p-2 border rounded-md"
                />
                <ErrorMessage name="name">
                  {(msg) => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 font-bold">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2 border rounded-md"
                />
                <ErrorMessage name="email">
                  {(msg) => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 font-bold">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-2 border rounded-md"
                />
                <ErrorMessage name="password">
                  {(msg) => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );

};

export default Signup;
