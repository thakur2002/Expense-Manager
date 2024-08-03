import React from 'react';
import  Header from './components/Header';
import Maincontent from './components/maincontent.js';

import { GlobalProvider } from './context/Globalstate';
import Total from './components/Total.js'
import './App.css';
function App() {
  return (
    <div className="app  bg-gray-100 min-h-screen">
    <GlobalProvider>
      <Header />
      <Total />
      <div className="container  mx-auto p-4 pt-48">
        <Maincontent type="Income" />
        <Maincontent type="Expense" />
      </div>
    </GlobalProvider>
  </div>
  
  );
}

export default App;
