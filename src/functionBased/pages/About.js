import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SinglePage from './SinglePage';

const About = () => (
  <div>
    <Navbar />
    <div>
      <NavLink to="singlepage">SinglePage</NavLink>
    </div>
    hello from about page
    <Routes>
      <Route path="/singlepage" element={<SinglePage />} />
    </Routes>
  </div>
);

export default About;
