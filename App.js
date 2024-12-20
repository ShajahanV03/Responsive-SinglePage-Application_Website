import React from 'react';
import './App.css';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from './components/inc/Footer';


function App() {
  return (
    <Router>

    <div>
    <Navbar />
    <switch>
    <Routes>
	<Route exact path='/' element={< Home />}></Route>
	<Route exact path='/about' element={< About />}></Route>
	<Route exact path='/contact' element={< Contact />}></Route>
</Routes>
</switch>
    
<Footer />



    </div>

    </Router>



  );
}

export default App;
