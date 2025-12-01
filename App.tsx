import React from 'react';
import Hero from './components/Hero';
import Abstract from './components/Abstract';
import Methodology from './components/Methodology';
// import QualitativeExamples from './components/QualitativeExamples';
import Results from './components/Results';
import Bibtex from './components/Bibtex';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Abstract />
      <Methodology />
      {/* <QualitativeExamples /> */}
      <Results />
      <Bibtex />
      <Footer />
    </div>
  );
};

export default App;