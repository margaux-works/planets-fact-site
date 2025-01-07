import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { PlanetPage } from './components/PlanetPage';

function App() {
  return (
    <Router>
      <div className="bg-darkBlue text-white min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<PlanetPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
