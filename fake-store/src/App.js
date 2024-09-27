import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Descuento from './components/Descuento';
import { DiscountProvider } from './DiscountContext';

const App = () => {
  return (
    <DiscountProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/descuento" element={<Descuento />} />
        </Routes>
      </Router>
    </DiscountProvider>
  );
};

export default App;
