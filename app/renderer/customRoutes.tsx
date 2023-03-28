import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';

const CustomRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default CustomRoutes;
