import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

import AddAppoinment from './Components/Add Appoinment/AddAppoinment';

import AppoinmentDetails from './Components/Appoinment Details/AppoinmentDetails';


function App() {

  return (
    <div>

      <React.Fragment>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mainhome' element={<Home/>}/> 
          <Route path='/addappoinment' element={<AddAppoinment/>}/> 
          <Route path='/appoinmentdetails' element={<AppoinmentDetails/>}/> 
        </Routes>

      </React.Fragment>


    </div>
  );
}

export default App;
