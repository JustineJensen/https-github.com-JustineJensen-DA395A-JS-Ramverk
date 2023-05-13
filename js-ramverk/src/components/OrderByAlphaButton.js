import React from 'react'

/**
 * Creates a button that is used to sort movies alphabetically.
 * @param {Recieves the movies in the props} props 
 * @returns A button element.
 */
export default function OrderByAlpha(props) {

    /**
     * Sorts the movies in the list alphabetically.
     */
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
