import React from 'react';
import { Route, Routes, BrowserRouter, Navigate, HashRouter } from 'react-router-dom';
import Home from './pages/home';
import Resume from './pages/resume';

const CustomRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default CustomRoutes;
