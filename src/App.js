import './App.css';
import React from 'react';

import {Contact,Research,Problems,Process,Whatperiod,Header} from './container';
import {Cta,Navbar} from './component';



function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Whatperiod />
      <Process />
      <Problems />
      <Cta />
      <Research />
      <Contact />
    </div>
  );
}

export default App;
