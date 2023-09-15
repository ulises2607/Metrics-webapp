import './App.css';
import { Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import NavBar from './Components/NavBar';

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
