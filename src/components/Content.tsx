import { MovieCard } from './MovieCard';
import { Header } from './Header';

import '../styles/content.scss';

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  movies: Movie[];
  selectedGenreTitle: string;
}

export function Content({movies, selectedGenreTitle}: ContentProps) {
  return (
    <div className="container">
      <Header title={selectedGenreTitle} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}