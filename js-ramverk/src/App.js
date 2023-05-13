import './App.css';
import AddMovieForm from './components/AddMovieForm';
import SaveMoviesButton from './components/SaveMoviesButton'
import OrderByAlphaButton from './components/OrderByAlphaButton'
import OrderByGradeButton from './components/OrderByGradeButton';
function App() {
  return (
    <div className="App">
      <AddMovieForm />
      <OrderByAlphaButton />
      <OrderByGradeButton/>
    </div>
  );
}

export default App;
