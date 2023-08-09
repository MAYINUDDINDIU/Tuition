import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'flowbite-react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home';
import Requireauth from './PrivateRoute/Requireauth';
import Slider from './Slider/Slider';

function App() {
  return (

    <div className="App">

    <Routes>
      <Route path='/' element={<Login />}>Login</Route>
      <Route path="/registration"  element={<Register />}>Register</Route>
      <Route path='/dashboard'  element={<Requireauth><Home /></Requireauth>}>Home</Route>
      <Route path="/slider"  element={<Slider />}>Slider</Route>
    </Routes>
 
  </div>

  );
}

export default App;
