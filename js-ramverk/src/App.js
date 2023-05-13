import './App.css';
import AddMovieForm from './components/AddMovieForm';
import SaveMoviesButton from './components/SaveMoviesButton'
import OrderByAlphaButton from './components/OrderByAlphaButton'
function App() {
  return (
    <div className="App">
      <AddMovieForm />
      <SaveMoviesButton />
      <OrderByAlphaButton />
    </div>
  );
}

export default App;
