import React from 'react';
import './index.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import  Course  from './Course/Course';
import Form from './Form/Form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Course/>}></Route>
        <Route path="/contact-us" element={<Form/>}></Route>

      </Routes>
    </BrowserRouter>
      <Footer/>
     
    </div>
  );
}

export default App;
