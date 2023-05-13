import React, { useState, useRef } from 'react'
import MovieList from './MovieList';
import SaveMoviesButton from './SaveMoviesButton';
import OrderByAlphaButton from './OrderByAlphaButton';
import OrderByGradeButton from './OrderByGradeButton';
import './styles/AddMovieForm.css';

export default function AddMovieForm() {
    const [movies, setMovies] = useState([]);

    const titleInputRef = useRef();
    const gradeInputRef = useRef();

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

            <SaveMoviesButton addMovieFunction={addMovie} />
            <MovieList movies={movies} deleteMovieFunction={deleteMovie} />
            <div id="sort-buttons">
                <OrderByAlphaButton movies={movies} setMovies={setMovies} />
                <OrderByGradeButton movies={movies} setMovies={setMovies} />
            </div>
        </div>
    )
}