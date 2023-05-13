import React, {useState, useRef} from 'react'
import MovieList from './MovieList';
import SaveMoviesButton from './SaveMoviesButton';

export default function AddMovieForm() {
    const [movies, setMovies] = useState([{}]);

    const titleInputRef = useRef();
    const gradeInputRef = useRef();

    function addMovie(){
        const newId = movies.length +1;
        setMovies([...movies, {
            id: newId,
            title: titleInputRef.current.value,
            grade: gradeInputRef.current.value
        }]);
    }

    function deleteMovie(id){
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

                <label for="title-field">Titel:</label>
                <input type="text" id="title-field" class="form-control" ref={titleInputRef}/>

                <label for="rating-field">Betyg:</label>

                <select type="text" id="rating-field" class="form-control" ref={gradeInputRef}>
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </fieldset>
            </form>

            <SaveMoviesButton addMovieFunction={addMovie}/>
            <MovieList movies={movies} deleteMovieFunction={deleteMovie}/>

        </div>
    )
}