import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/discover/movie?api_key=5f5639e7e6d8cd1f2e64643d369ab6e8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
  
  
});




export default api;