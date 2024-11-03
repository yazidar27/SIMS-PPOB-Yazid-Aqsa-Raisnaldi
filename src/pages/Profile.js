// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { updateProfile, fetchUserProfile } from '../redux/profileSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Create navigate instance
  const { user, loading, error } = useSelector((state) => state.profile);

  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    // Fetch user profile data on component mount
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    // Update form state when user data changes
    if (user) {
      setForm({
        email: user.email || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(form));
  };

  // Function to handle back navigation
  const handleBack = () => {
    navigate('/home'); // Navigate to home page
  };

  // Render loading and error messages
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center">
        <img
          src="/path/to/avatar.png"
          alt="Avatar"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold">{`${form.firstName} ${form.lastName}`}</h2>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required // Add required validation
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Depan</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required // Add required validation
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Belakang</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required // Add required validation
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-red-500 text-white font-semibold rounded-md mt-4"
        >
          Edit Profil
        </button>
      </form>
      <button
        className="w-full py-2 mt-4 text-red-500 border border-red-500 rounded-md"
        onClick={handleBack} // Attach back navigation
      >
        Kembali ke Home
      </button>
    </div>
  );
};

export default Profile;
