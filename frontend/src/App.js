import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import { Link } from 'react-router-dom'; // Remove this if not used


import AddNurse from './Components/AddNurse/AddNurse';
import NurseDetails from './Components/NurseDetails/NurseDetails';
import UpdateNurse from './Components/UpdateNurse/UpdateNurse';


function App() {

  return (
    <div>

      <React.Fragment>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mainhome' element={<Home/>}/> 
          <Route path='/addappoinment' element={<AddNurse/>}/> 
          <Route path='/appoinmentdetails' element={<NurseDetails/>}/> 
          <Route path='/appoinmentdetails/:id' element={<UpdateNurse/>}/> 
        </Routes>

      </React.Fragment>


    </div>
  );
}

export default App;
