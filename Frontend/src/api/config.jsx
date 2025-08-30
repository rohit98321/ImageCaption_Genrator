import axios from "axios";

  const instance = axios.create({
    baseURL: 'https://imagecaption-genrator.onrender.com',
    withCredentials: true,
  });




  export default instance
  
