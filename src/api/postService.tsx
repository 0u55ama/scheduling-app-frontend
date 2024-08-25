// src/api/apiService.ts

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000, // Timeout if necessary
  headers: {
    'Content-Type': 'application/json',
  },
});

const postData = async (url: string, data = {}) => {
try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

export default postData;
