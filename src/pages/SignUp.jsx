// SignUp.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate, NavLink } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import validationSchema from '../Validation/SignupValidation';

const SignUp = () => {
  const initialValues = {
    email: '',
    password: '',
    name: '',
    date: '',
    confirmPassword: '',
  };

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);

    // Encrypt data before storing it in local storage
    const encryptedData = {
      email: CryptoJS.AES.encrypt(values.email, 'your-secret-key').toString(),
      password: CryptoJS.AES.encrypt(values.password, 'your-secret-key').toString(),
      name: CryptoJS.AES.encrypt(values.name, 'your-secret-key').toString(),
      date: CryptoJS.AES.encrypt(values.date, 'your-secret-key').toString(),
    };

    // Store encrypted data in local storage
    localStorage.setItem('user', JSON.stringify(encryptedData));

    // Redirect to the sign-in page
    navigate('/signin');
  };
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="name" className="text-gray-700">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="name" component="div" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="date" className="text-gray-700">
              Date
            </label>
            <Field
              type="date"
              id="date"
              name="date"
              className="border border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="date" component="div" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="text-gray-700">
              Confirm Password
            </label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="border border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded focus:outline-none"
          >
            Sign Up
          </button>
          <p className="text-center text-gray-600">
            Already have an account?{' '}
            <NavLink to="/signin" className="text-blue-500 underline">
              Sign In
            </NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
