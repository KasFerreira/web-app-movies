import Heading from "./components/Header/Heading";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ListaFilmes from "./components/ListaFilmes";

const  Movies = ()=> {
  const [filmes, setFilmes] = useState([])
  const [page, setPage] = useState(1)


  async function getFilmes(page=1){

    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=5f5639e7e6d8cd1f2e64643d369ab6e8&language=en-US&page="+page
    );
    console.log(response.data);

    setFilmes(filmes=>[...filmes,...response.data.results]);

  }

    useEffect(()=>{
   
     getFilmes(page)

    }, [page])
    
  
    
   
    return (
      <div className="movies">
        <h1>Listar os filmes</h1>
        <div className="listaFilmes">
          <ListaFilmes  filmes={filmes} />
          <button onClick={()=>setPage(page=>page+1)} >Mais...</button>
        </div>
      </div>
    );
  
}
export default Movies;
