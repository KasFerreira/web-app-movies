import Heading  from "../Header/Heading";
import {searchMovies}  from "../Header/Heading";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage} from '../../helpers/localstorage'
import { Button }from 'react-bootstrap'

import './movies.css'

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
      <><Heading/>
      <div className="movies">
        
        <h1>Filmes</h1>
        <div className="listaFilmes">
          <ListaFilmes  filmes={filmes} />
          
        </div>
        <Button   onClick={()=>setPage(page=>page+1)} >Mais...</Button>
        
      </div>
      </>
    );
  
}



function ListaFilmes({filmes}){
  const Login = 'conta'       
  const perfil = 'dependente'
  
    function handleClick(key, id){

      // Salva filmes no localstorage
      let data = getLocalStorage(key)
      if(data){
      data?.watchlist.push(id)
      }else{
  
        data = {watchlist:[id]}
      }
      console.log(data)
      setLocalStorage(key, data)
  
  
    }
  
  return(
      <>
      {filmes.map((filme) => (
              
          <li className="movie-li" key={filme.id}>
            <img
              src={`https://image.tmdb.org/t/p/w400/${filme.poster_path}`}
              alt="Movie Poster"
              height="290px"
              width="200px"
            />
            <div><h2>{filme.title}</h2>
             
            <button onClick={()=>handleClick(`${Login}_${perfil}`,filme.id)}>Salvar</button>
            </div>
          </li>
        ))}
        </>
  
  )
  }


  
  
export default Movies;
