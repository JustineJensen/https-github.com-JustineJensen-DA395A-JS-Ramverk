import React, { useState } from 'react'

/**
 * Creates a button that is used to sort movies alphabetically.
 * @param {Recieves the movies in the props} props 
 * @returns A button element.
 */
export default function OrderByGrade(props) {

    /**
     * Sorts the movies in the list by their grade.
     */
    function orderMoviesByGrade(){
        const movies = Array.from(props.movies)
        const sortedList = movies.sort((a, b) => a.grade.localeCompare(b.grade, undefined, { ignorePunctuation: true }));
        props.setMovies(sortedList)
    }

    return (
        <div>
            <button id="order-grade" className="btn btn-primary" onClick={orderMoviesByGrade}>
                Betygsordning
            </button>
        </div>
    )
}