// src/pages/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    try {
      await dispatch(registerUser({ email, firstName, lastName, password })).unwrap();
      navigate('/'); // Navigate to homepage after successful registration
    } catch (err) {
      setError(err.message); // Display error message on registration failure
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
          <div className="flex flex-row items-center">
            <img src="./assets/Logo.png" alt="SIMS PPOB" className="h-12 mb-4 px-2" />
            <h2 className="text-xl font-semibold text-gray-800 mb-6">SIMS PPOB</h2>
          </div>
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
            Lengkapi data untuk membuat akun
          </h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="w-full max-w-xs">
            <div className="mb-4">
              <input
                type="email"
                placeholder="masukan email anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nama Depan"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nama Belakang"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Kata Sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Konfirmasi Kata Sandi"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
            >
              Daftar
            </button>
          </form>
          <p className="text-gray-600 text-sm mt-4">
            Sudah punya akun? <a href="/login" className="text-red-500 font-medium">Login di sini</a>
          </p>
        </div>
        <div className="hidden md:flex w-1/2 bg-pink-100 items-center justify-center">
          <img src="./assets/dada.png" alt="Illustration" className="h-128" />
        </div>
      </div>
    </div>
  );
};

export default Register;
