import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
      <div className="flex items-center">
        <span className="text-xl font-bold">My App</span>
      </div>
      <div>
        <NavLink
          to="/signin"
          className="mr-2 bg-transparent hover:bg-white text-white hover:text-gray-800 font-semibold py-2 px-4 border border-white hover:border-transparent rounded"
        >
          Sign In
        </NavLink>
        <NavLink
          to="/signup"
          className="bg-transparent hover:bg-white text-white hover:text-gray-800 font-semibold py-2 px-4 border border-white hover:border-transparent rounded"
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default Home;

