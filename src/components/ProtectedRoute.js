// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Cek token di localStorage

  if (!token) {
    return <Navigate to="/login" />; // Arahkan ke login jika belum login
  }

  return children; // Tampilkan halaman jika sudah login
};

export default ProtectedRoute;
