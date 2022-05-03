import { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import movies from "./movies.json";
import styles from "./MoviesGrid.module.css"

export function MoviesGrid(){
    useEffect(()=>[
        fetch("https://api.themoviedb.org/3/discover/movie",{
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDE2OWYzNDZmYjk2YWE2ZDBjMjYxZWNkNzZiMDliMSIsInN1YiI6IjYyNzA4MTZiN2NmZmRhNzMxNmJkNThlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l-3FfrlDXHJWLxSnpGgwohBPZjXZ-ziDLTA9ifgMntI",
                "Content-Type": "application/json;charset=utf-8",

            }
        })
    ])
       return(
        <ul className={styles.moviesGrid}>
            {movies.map((movie)=>(
                <MovieCard key = {movie.id} movie ={movie}/>
            ))}
        </ul>
    );
}