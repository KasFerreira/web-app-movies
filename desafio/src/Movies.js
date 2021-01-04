import Heading from "./components/Header/Heading";
import axios from "axios";
import React, { Component } from "react";
import ListaFilmes from './components/ListaFilmes'

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
      <div className="movies">
        <Heading/>
        <h1>Listar os filmes</h1>
      <div className="listaFilmes">
        
        <ListaFilmes data={filmes}/>
          
        
      </div>
      </div>
    );
  }
}
export default Movies;
