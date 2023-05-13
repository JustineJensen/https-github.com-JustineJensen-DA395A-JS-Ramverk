import React from 'react'
import starImg from '../resources/star.png'
import deleteImg from '../resources/delete.png'

export default function MovieList() {
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
            </ul>
        </div>
    )
}
