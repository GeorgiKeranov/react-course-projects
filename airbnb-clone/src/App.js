import React from 'react';
import Header from './components/Header';
import SectionIntro from './components/SectionIntro';
import SectionCards from './components/SectionCards';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="container">
          <SectionIntro />
          
          <SectionCards />
      </div>
    </div>
  );
}

export default App;
