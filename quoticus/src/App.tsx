import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from './pages/Quotes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
