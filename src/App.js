import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import TrainingMaterialsPage from './pages/TrainingMaterialsPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/training" element={<TrainingMaterialsPage />} />
      {/* Add more routes as needed */}
    </Routes>
  </Router>
);

export default App;
