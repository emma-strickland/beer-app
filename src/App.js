import logo from './logo.svg';
import './App.css';

const BEERS = ["Glutenberg", "Ghostfish", "Departed Soles"]
const BEERS2 = [
  {
    "name": "Glutenberg",
    "abv": "8%",
    "image": "https://"
  }];
function App() {
  const beerItems = BEERS.map(beer => {
    return <li key={beer}>{beer}</li>
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {beerItems}
        </ul>
      </header>
      <p>This is a paragraph</p>
    </div>
  );
}

export default App;
