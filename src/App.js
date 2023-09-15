// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import AuthProvider from './context/AuthState'; // Make sure to import AuthProvider correctly

const App = () => {
  return (
    <Router>
      <AuthProvider> {/* Wrap the routes with AuthProvider */}
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

export default App;
