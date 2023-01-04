import { useState } from 'react';
import './App.css'
import Home from "./components/Home";
import NavBar from './components/NavBar';
import SideBar from "./components/SideBar";



function App() {
  const [showTitle, setShowTitle] = useState(false);
  return (
    <div className="App">
      <NavBar showTitle={showTitle} setShowTitle={setShowTitle} />
      <div className="data">
        <SideBar showTitle={showTitle} />
        <Home />
      </div>
    </div>
  );
}

export default App;
