import React from 'react';

import Nav from './components/Nav';
import About from './components/About';
import Card from './components/Card';
// import Home from './components/Home';
import Hero from './components/Hero';


function App() {

  return (
    <div className='wrapper'>
      <Nav />
      <main>
        <Hero />
        <About />  
        <Card />
      </main>
    </div>
  );
}

export default App;
