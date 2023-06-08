import { Routes, Route } from 'react-router-dom';
import React from 'react';
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent';
import Navbar from './components/Navbar';
import Nav from './components/Nav';
const App = () => {
 return (
    <>
    <h1>React Router</h1>
    <Nav/>
  <Routes>
  
    <Route path="/" element={ <FirstComponent/>} />
    <Route path="/second" element={<SecondComponent/>} />
    <Route path="/second/:id" element={<SecondComponent/>} />

  </Routes>
  </>
 );
};
export default App;
