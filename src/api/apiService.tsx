import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  timeout: 5000, // Timeout if necessary
  headers: {
    'Content-Type': 'application/json', // Corrected Content-Type header
    // Add all custom headers here
  },
});

const fetchData = async (url: string, options = {}) => {
  try {
    const response = await axiosInstance(url, options);
    return response.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
};

export default fetchData;
