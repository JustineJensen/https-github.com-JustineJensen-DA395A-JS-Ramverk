import React, { useState } from 'react'

export default function OrderByGrade(props) {

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