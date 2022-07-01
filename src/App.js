import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Knowledges from './Components/Knowledges/Knowledges';
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact';
import Work from './Components/Work/Work';


function App() {
 
  return (
    <div className="App" id='app'>
      <Header/>
      <Nav/>
      <About/>
      <Knowledges/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
