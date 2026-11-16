import "../css/Favorites.css";
import { useMovieContext } from "../contexts/moviecontaxt ";

function Favorites() {
   const {favorites}  = useMovieContext();

   if (Favorites.length > 0 ) {
    return (
        <div className="Favorites">
            <h2>your Favorites</h2>
      <div className="movies-grid">
            {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
            </div>
            </div>
    );
   };

    return <div className="favorites-empty">
        <h2>no favorite movies yet</h2>
        <p>start adding movies to your favorites and they will appear here!</p>
    </div>
}

export default Favorites;