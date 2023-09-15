// AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import ProtectedRoute from "./ProtectedScreen/ProtectedRoute"; // Make sure the import path is correct
import Notfound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="product" element={<Product />} />
          <Route path="product/:productId" element={<ProductDetails />} />
        </Route>
      </Route>
      <Route path="*" element={<Notfound/>}/>
    </Routes>
  );
};

export default AppRoutes;
