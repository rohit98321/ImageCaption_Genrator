import axios from "axios";


const urls=[
  'https://imagecaption-genrator.onrender.com',
  "http://localhost:3000"

]

  const instance = axios.create({
    baseURL:  "https://imagecaption-genrator.onrender.com",
    withCredentials: true,
  });




  export default instance
  
