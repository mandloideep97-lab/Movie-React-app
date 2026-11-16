import MovieCard from "../components/movieCord"
import { useState,useEffect } from "react";
import {searchMovie,getpopularMovie} from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies,setMovies] = useState([]);
  const[error,setError] = useState(null);
  const [loading,setLoading] = useState(true);


  useEffect(() =>{
    const loadpopularMovies= async () => {
        try{
            const popularMovies = await getpopularMovie()
            setMovies(popularMovies)
        }catch(error) {
            console.log(err)
            setError("failed to load movies...")
        }
        finally{
            setLoading(false);
        }
    }

    loadpopularMovies()
  },[])

    

    const handleSearch=  async(e) => {
        e.preventDefault();
        if (!searchQuery.trim())return
        if (loading)return

        setLoading(true)
        try {
            const searchResults = await searchMovie(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch (err) {
            console.log(err)
            setError("failed to search movies...")
        } finally {
            setLoading(false)
        }
    };

    return (
     <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text"
            placeholder="search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
                search
                </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ?(
            <div className="loading">Loading...</div>
        ) : (
            <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
            </div>
        )}
    </div>
    );
}

export default Home;