import SearchEngine from './SearchEngine';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Weather App</h1>
      <SearchEngine />

      <footer>
        <a href="https://github.com/Zahradalmar/weather-react" rel="noreferrer">
          Open-source code
        </a>{" "}
        by Zahra Mohamed
      </footer>
    </div>
  );
}

export default App;
