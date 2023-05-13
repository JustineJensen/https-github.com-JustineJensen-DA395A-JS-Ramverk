import React from 'react'
import starImg from '../resources/star.png'
import deleteImg from '../resources/delete.png'

export default function Movie(props) {

    let stars = [];
    for (let i = 0; i < props.item.grade; i++) {
        stars.push(<img src={starImg} alt="Star" />);
    }

    return (
        <div>
            <li className='list-group-item'>
                {props.item.title}
                {stars}
                {Object.keys(props.item).length > 0 && (
                    <img src={deleteImg} alt="Delete movie" className="delete-movie" onClick={() => props.deleteMovieFunction(props.item.id)}/>
                )}
            </li>
        </div>
    )
}