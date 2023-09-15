import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 py-4 text-center">Welcome to the Dashboard!</h1>

     
          <NavLink to="/dashboard/product">
           <button className='bg-blue-500 px-2 mx-[600px] my-2'>Click Me!!!</button>
          </NavLink>
     
      <div className="max-w-4xl mx-auto px-4">
        {/* Add your dashboard components and content here */}
      </div>
      <Outlet/>
    </div>
  );
};

export default Dashboard;
