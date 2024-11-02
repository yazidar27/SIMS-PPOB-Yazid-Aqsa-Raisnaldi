// src/pages/Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, fetchUserBalance, fetchServices, fetchBanners } from '../redux/profileSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { user, balance, loading, error } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchUserProfile());
    dispatch(fetchUserBalance());
    dispatch(fetchServices());
    dispatch(fetchBanners());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Selamat datang, {user?.name}</h2>
        <h2 className="text-xl mb-6">Saldo Anda: {balance?.amount}</h2>
        {/* Additional content such as banners and services can be added here */}
      </div>
    </div>
  );
};

export default Home;
