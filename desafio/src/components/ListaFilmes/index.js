import React from 'react'
import { getLocalStorage, setLocalStorage  } from '../../helpers/localstorage'



function ListaFilmes({filmes}){
const Login = 'Lucas'
const perfil = 'filho'

  function handleClick(key, id){

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
            
        <li key={filme.id}>
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


export default ListaFilmes