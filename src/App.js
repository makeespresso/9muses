import React from 'react';
import './App.css';
// import { random_act } from './services/random_act'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './Routes'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
