// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, fetchUserBalance, fetchServices, fetchBanners } from '../redux/profileSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, balance, services, banners, loading, error } = useSelector((state) => state.profile);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(fetchUserProfile());
      dispatch(fetchUserBalance());
      dispatch(fetchServices());
      dispatch(fetchBanners());
    } else {
      setShowLogin(true);
    }
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
          {showLogin ? (
            <>
              <div className="flex flex-row items-center">
              <img src="./assets/Logo.png" alt="SIMS PPOB" className="h-12 mb-4 px-2" />
              <h2 className="text-xl font-semibold text-gray-800 mb-6">SIMS PPOB</h2>
              </div>
              <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Masuk atau buat akun untuk memulai</h2>
              <form className="w-full max-w-xs">
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="masukan email anda"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="masukan password anda"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                  />
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
                >
                  Masuk
                </button>
              </form>
              <p className="text-gray-600 text-sm mt-4">
                belum punya akun? <a href="#" className="text-red-500 font-medium">registrasi di sini</a>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4">Selamat datang, {user.name}</h2>
              <h2 className="text-xl mb-6">Saldo Anda: {balance.amount}</h2>
              {/* Additional content like banners and services */}
            </>
          )}
        </div>
        <div className="hidden md:flex w-1/2 bg-pink-100 items-center justify-center">
          {/* Right-side illustration */}
          <img src="./assets/dada.png" alt="Illustration" className="h-128" />
        </div>
      </div>
    </div>
  );
};

export default Home;
