import React from 'react';
import Header from './components/Header';
import SectionIntro from './components/SectionIntro';
import SectionExperiences from './components/SectionExperiences';
import './App.css';

function App() {
  return (
    <div className="app">
        <Header />
        <SectionIntro />
        <SectionExperiences />
    </div>
  );
}

export default App;
