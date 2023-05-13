import React from 'react'

export default function OrderByAlpha(props) {

    function orderMoviesByAlphabet(){
        const movies = Array.from(props.movies);
        const sortedList = movies.sort((a, b) => a.title.localeCompare(b.title, undefined, { ignorePunctuation: true }));
        props.setMovies(sortedList)
    }

    return (
        <div>
            <button id="order-alphabetic" className="btn btn-primary" onClick={orderMoviesByAlphabet}>
                Alfabetisk ordning
            </button>
        </div>
    )
}
