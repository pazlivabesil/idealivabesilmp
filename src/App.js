import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar.js/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';

  
function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting = "Hello U"/>
        <ItemCount/>
    </div>
  );
}

export default App;
 