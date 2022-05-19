import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js/NavBar';
import CountClass from './Components/CountClass/CountClass';
import CountFunction from './Components/CountFunction/CountFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <CountClass/>
        <CountFunction/>
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
      </header>
    </div>
  );
}

export default App;
