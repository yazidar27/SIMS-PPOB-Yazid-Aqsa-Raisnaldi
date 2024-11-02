// src/pages/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password })).unwrap();
      navigate('/'); // Arahkan ke homepage setelah login berhasil
    } catch (err) {
      setError(err.message); // Menyimpan pesan error jika login gagal
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
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Masuk atau buat akun untuk memulai</h2>
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
            <div className="mb-6">
              <input
                type="password"
                placeholder="masukan password anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
            >
              Masuk
            </button>
          </form>
          <p className="text-gray-600 text-sm mt-4">
            belum punya akun? <a href="/register" className="text-red-500 font-medium">registrasi di sini</a>
          </p>
        </div>
        <div className="hidden md:flex w-1/2 bg-pink-100 items-center justify-center">
          <img src="./assets/dada.png" alt="Illustration" className="h-128" />
        </div>
      </div>
    </div>
  );
};

export default Login;
