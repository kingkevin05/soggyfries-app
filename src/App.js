import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ApolloClient, InMemoryCache } from '@apollo/client';
import HomePage from './components/HomePage';
import MusicPage from './components/MusicPage';
import ShopPage from './components/ShopPage';
import ContactPage from './components/ContactPage';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache()
// });

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
