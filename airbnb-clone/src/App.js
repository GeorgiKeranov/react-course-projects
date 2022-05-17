import React from 'react';
import Header from './components/Header';
import SectionIntro from './components/SectionIntro';
import SectionCards from './components/SectionCards';
import './App.css';

function App() {
  return (
    <div className="app">
        <Header />
        <SectionIntro />
        <SectionCards />
    </div>
  );
}

export default App;
