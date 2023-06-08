import React from 'react';
import logo from './logo.svg';
import './App.css';
import Authors from './pages/Authors';
import AuthorQuotes from './pages/AuthorQuotes';
import Categories from "./pages/Categories"
import CategoryQuotes from "./pages/CategoryQuotes"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/:authorName/quotes" element={<AuthorQuotes />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryName/quotes" element={<CategoryQuotes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
