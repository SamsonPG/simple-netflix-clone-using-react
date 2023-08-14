import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import NetFlixShow from './pages/NetFlixShow';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/netflix-show" Component={NetFlixShow} />
 
      </Routes>
 
   <Footer/>
   <ScrollToTop/>
    </div>
    </BrowserRouter>
  );
}

export default App;