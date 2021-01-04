import React from 'react'


function ListaFilmes({data}){
return(
    <>
    {data.map((filme) => (
            
        <li key={filme.id}>
          <img
            src={`https://image.tmdb.org/t/p/w400/${filme.poster_path}`}
            alt="Movie Poster"
            height="290px"
            width="200px"
          />
          <div><h2>{filme.title}</h2></div>
        </li>
      ))}
      </>

)
}


export default ListaFilmes