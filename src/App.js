import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'flowbite-react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home';

function App() {
  return (

    <div className="App">

    <Routes>
      <Route path='/' element={<Login />}>Login</Route>
      <Route path='/dashboard' element={<Home />}>Home</Route>
      <Route path="/registration"  element={<Register />}>Register</Route>
    </Routes>
 
  </div>

  );
}

export default App;
