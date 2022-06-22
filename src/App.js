import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Cards from './components/Cards';
function App() {

  return (
    <div>
      <Nav />
      <main>
          <About />  
          <Cards />
      </main>
    </div>
  );
}

export default App;
