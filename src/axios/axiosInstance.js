import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://your-backend-api.com/', // Set your base URL
  });

axiosInstance.interceptors.request.use(
    (config) => {
      console.log('Intercepted Request:', config);
      
      // Example: Add Authorization Header if needed
      // config.headers['Authorization'] = `Bearer ${yourToken}`;
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default axiosInstance;