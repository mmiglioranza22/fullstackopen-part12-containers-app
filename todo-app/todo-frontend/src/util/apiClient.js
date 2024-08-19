import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
})

// const apiClient = axios.create({
//   baseURL: import.meta.env.PROD
//     ? import.meta.env.VITE_BACKEND_URL_PROD
//     : import.meta.env.VITE_BACKEND_URL,
// });

export default apiClient