import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

// 자동으로 실행함.
/**
 * setState 를 실행하면 
 * state 를 refresh 하고 다시 render함.
 */
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  // render 이후에 불러지는 메소드
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
      { isLoading
        ? <div className="loader"><span className="loader__text">loading ...</span></div>
        : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        ) 
      }
      </section>
    )
  }
}

export default App;
