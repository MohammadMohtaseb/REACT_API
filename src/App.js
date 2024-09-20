import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherPage from './WeatherPage';
import Home from './Home';
import MoviesPage from './MoviesPage';
import MovieDetailPage from './MovieDetailPage';
import ContactList from './ContactList';
import RecipeList from './RecipeList';
import About from './About';
import Contact from './Contact';
import Layout from './Component/Layout';
import Note from './Note';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
          <Route path="/contacts" element={<ContactList />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notes" element={<Note />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
