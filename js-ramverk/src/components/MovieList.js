import React from 'react'
import Movie from './Movie'

export default function MovieList(props) {
    return (
        <div>
            <h2>Mina filmer</h2>
            <ul id="movie-list">
                {
                    /*
                <li data-grade="5" data-title="Star Wars">
                Star Wars
                <img src={starImg} alt="Star" />
                <img src={starImg} alt="Star" />
                <img src={starImg} alt="Star" />
                <img src={starImg} alt="Star" />
                <img src={starImg} alt="Star" />
                <img src={deleteImg} alt="Delete movie" class="delete-movie" />
                </li>
                */
                }
                {props.movies.map(movie => <Movie key={movie.id} item={movie}/>)}
            </ul>
        </div>
    )
}
