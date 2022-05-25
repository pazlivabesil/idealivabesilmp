import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js/NavBar';
import CountFunction from './Components/CountFunction/CountFunction'; 
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
  
function App() {
  return (
    <div className="App">
        <NavBar />
        <CountFunction />
        <ItemListContainer greeting = "Hello U"/>
    </div>
  );
}

export default App;
