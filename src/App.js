import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home";
function App() {
  /* const [today, setToday] = useState('');
  
  function componentDidMount() {
    fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(data => {
        setToday(data.title);
        console.log(data.title);
      } );
  }

   useEffect(() => {
     componentDidMount();
  }, []); */
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
