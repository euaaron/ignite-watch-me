import { GenreResponseProps } from "../models/Genre";
import { MovieProps } from "../models/Movie";
import { MovieCard } from "./MovieCard";

interface IContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content(props: IContentProps) {
  const { selectedGenre, movies } = props;

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
