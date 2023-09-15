import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate, NavLink } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import validationSchema from '../Validation/SigninValidation';
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const navigate = useNavigate();
  const { signIn } = useAuth(); // Use the useAuth hook to access signIn function

  const handleSubmit = (values) => {
    // Retrieve encrypted data from local storage
    const storedData = localStorage.getItem('user');
    if (!storedData) {
      // Handle the case where no user data is found
      return;
    }

    const decryptedData = JSON.parse(storedData);
    const decryptedEmail = CryptoJS.AES.decrypt(decryptedData.email, 'your-secret-key').toString(CryptoJS.enc.Utf8);
    const decryptedPassword = CryptoJS.AES.decrypt(decryptedData.password, 'your-secret-key').toString(CryptoJS.enc.Utf8);

    console.log(
      'values',
      values,
      'Email',
      decryptedEmail,
      'password',
      decryptedPassword
    );

    // Check if the entered email and password match the decrypted values
    if (values.email === decryptedEmail && values.password === decryptedPassword) {
      alert("jaydeep")
      // Redirect to the dashboard
      signIn(); // Call the signIn function from the useAuth hook to set isAuthenticated to true
      navigate('/dashboard');
    } else {
      alert("hardik")
      // Handle incorrect email or password
      // e.g., show an error message
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6">Sign In</h2>
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
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
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
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded focus:outline-none"
          >
            Sign In
          </button>
          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <NavLink to="/signup" className="text-blue-500 underline">
              Sign Up
            </NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
