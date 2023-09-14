import './App.css';
import Details from './pages/Details';
import Home from './pages/Home';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:country" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
