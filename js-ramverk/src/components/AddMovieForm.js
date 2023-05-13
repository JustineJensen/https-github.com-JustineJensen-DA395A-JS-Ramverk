import React, { useState, useRef } from 'react'
import MovieList from './MovieList';
import SaveMoviesButton from './SaveMoviesButton';
import OrderByAlphaButton from './OrderByAlphaButton';
import OrderByGradeButton from './OrderByGradeButton';
import './styles/AddMovieForm.css';

/**
 * This function creates the AddMovieForm component.
 * It also creates other components such as SaveMoviesButton, MovieList, OrderByAlphaButton and OrderByGradeButton.
 * @returns AddMovieForm and other components
 */
export default function AddMovieForm() {
    const [movies, setMovies] = useState([]);

    const titleInputRef = useRef();
    const gradeInputRef = useRef();

    /**
     * This function adds a movie to the list.
     * It is passed to the SaveMoviesButton in the props.
     */
    function addMovie() {
        if (titleInputRef.current.value != "") {
            if (gradeInputRef.current.value != 0) {
                const newId = movies.length + 1;
                setMovies([...movies, {
                    id: newId,
                    title: titleInputRef.current.value,
                    grade: gradeInputRef.current.value
                }]);
            }
            else {
                alert("Väl ett betyg!")
            }
        }
        else {
            alert("Välj ett namn!")
        }
    }

    /**
     * This function deletes a movie from the list.
     * It is first passed to the MovieList component then passed to the Movie componen in the props.
     * @param {The id of the movie to remove} id 
     */
    function deleteMovie(id) {
        setMovies(movies.filter((item) => item.id !== id));
    }

    return (
        <div>
            <h1>
                Min filmlista
            </h1>
            <form>
                <fieldset>
                    <legend>Lägg till en film</legend>

                    <label htmlFor="title-field">Titel:</label>
                    <input type="text" id="title-field" className="form-control" ref={titleInputRef} />

                    <label htmlFor="rating-field">Betyg:</label>

                    <select type="text" id="rating-field" className="form-control" ref={gradeInputRef}>
                        <option value="0">Välj betyg här...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </fieldset>
            </form>

            {
                //Create components and send all the neccessary data to them through their props.
            }
            <SaveMoviesButton addMovieFunction={addMovie} />
            <MovieList movies={movies} deleteMovieFunction={deleteMovie} />
            <div id="sort-buttons">
                <OrderByAlphaButton movies={movies} setMovies={setMovies} /> 
                <OrderByGradeButton movies={movies} setMovies={setMovies} />
            </div>
        </div>
    )
}