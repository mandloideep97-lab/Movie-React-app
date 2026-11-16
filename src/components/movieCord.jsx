import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/moviecontaxt ";

function MovieCard({movie}) {
    const {addToFavorites,
         removeFromFavorites,
         isFavorite,
        }= useMovieContext()
   const favorite = isFavorite(movie.id);


    function onFavoriteClick(e) {
    e.preventDefault();

     if (favorite) { 
        removeFromFavorites(movie.id)
    }else {
addToFavorites(movie);
    }
    }
    
   
    
    return (
    <div className="movie- cord">
        <div className="movie-poster">
            <img src={`https:/image.tmdb.org/t/p/w500${movie.poster_path}`}  alt={movie.title} />
            <div className="movie-overlay">
                <button
                type="button"
                onClick={() => {
                    console.log("FAVORITE BUTTON CLICKED");
                    console.log("movie:", movie);
                    console.log("Is favorite :", favorite);

                    if (favorite) {
                        removeFromFavorites(movie.id);
                    }else{
                        addToFavorites(movie);
                    }
                }}
                 >
                    🤍
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
    );
}

export default MovieCard;