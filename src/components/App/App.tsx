import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Catalog from '../Catalog/Catalog';
import WhyWe from '../WhyWe/WhyWe';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Catalog />
      <WhyWe />
    </div>
  );
}

export default App;
