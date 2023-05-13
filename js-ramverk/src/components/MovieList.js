import React from 'react'
import Movie from './Movie'
import './styles/MovieList.css'

/**
 * Returns a UL element that is used to display the movies.
 * @param {Recieves the movie and the deleteMovieFunction in the  param props} props 
 * @returns A UL element.
 */
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