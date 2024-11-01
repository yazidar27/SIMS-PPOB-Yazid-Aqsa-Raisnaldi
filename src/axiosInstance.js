// src/axiosInstance.js
import axios from 'axios';

const API_BASE_URL = 'https://api-doc-tht.nutech-integrasi.com';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export default axiosInstance;
export { API_BASE_URL }; // Pastikan API_BASE_URL diekspor
