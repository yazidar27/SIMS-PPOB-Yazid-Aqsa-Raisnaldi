// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Ganti dengan import halaman Home
import Register from './components/Register';
import Login from './components/Login';
// Impor komponen lain sesuai kebutuhan

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> {/* Tambahkan rute untuk login */}
        {/* Tambahkan rute lainnya sesuai kebutuhan */}
      </Routes>
    </Router>
  );
};

export default App;
