import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage  from './components/MainPage'
import InternshipPage from './components/HiringPage'
import AddBlogs from './cred/AddBlogs';
import SiteAnalytics from './cred/Analytics'
import ResourcePage from './components/ResourcePage'
import AboutPage from './components/AboutPage'

export default function Home() {
  return (
    <Router>
        <Routes>
         
          <Route path="/" element={<MainPage />} />
          <Route path="/Internship" element={<InternshipPage />} />
          <Route path="/AddBlogs" element={<AddBlogs />} />
          <Route path="/SiteAnalytics" element={<SiteAnalytics />} />
          <Route path="/Resource" element={<ResourcePage />} />
          <Route path="/About" element={<AboutPage />} />

        </Routes>

      
     
    </Router>
  );
}