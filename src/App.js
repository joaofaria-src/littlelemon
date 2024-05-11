import React from 'react';
import './App.css';
import Header from './Header'; 
import Nav from './Nav'; 
import Main from './Main'; 
import Footer from './Footer'; 

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
