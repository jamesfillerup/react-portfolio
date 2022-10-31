import React from 'react';

import Nav from './components/Nav';
import About from './components/About';
// import Cards from './components/Cards';
// import Home from './components/Home';
import Hero from './components/Hero';


function App() {

  return (
    <div className='wrapper'>
      <Nav />
      <main>
        <Hero />
        <About />  
        {/* <Cards /> */}
      </main>
    </div>
  );
}

export default App;
