import React from 'react'
import Movie from './Movie'

export default function MovieList(props) {
    return (
        <div>
            <h2>Mina filmer</h2>
            <ul id="movie-list">
                {props.movies.map(movie => <Movie key={movie.id} item={movie} deleteMovieFunction={props.deleteMovieFunction}/>)}
            </ul>
        </div>
    )
}