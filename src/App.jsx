import React from 'react';
import Navbar from './components/Navbar';
import ProductTable from './components/ProductTable';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ProductTable />
    </div>
  );
};

export default App;
