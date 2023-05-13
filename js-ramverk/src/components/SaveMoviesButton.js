import React from 'react'

/**
 * Saves a movie to the list.
 * @param {Recieves the addMovieFunction in the param props.} props 
 * @returns A button element.
 */
export default function SaveMoviesButton(props) {
  return (
    <div>
        <input type="submit" className="btn btn-success mt-3" value="Spara film" onClick={props.addMovieFunction}/>
    </div>
  )
}
