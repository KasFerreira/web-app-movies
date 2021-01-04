import Heading from "./components/Header/Heading";
import axios from "axios";
import React, { Component } from "react";

class Movies extends Component {
  state = {
    filmes: [],
  };
  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=5f5639e7e6d8cd1f2e64643d369ab6e8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    );
    console.log(response.data.results);

    this.setState({ filmes: response.data.results });
  }

  render() {
    const { filmes } = this.state;
    return (
      <div className="listaFilmes">
        <h1>Listar os filmes</h1>
        
          {filmes.map((filme) => (
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
        
      </div>
    );
  }
}
export default Movies;
