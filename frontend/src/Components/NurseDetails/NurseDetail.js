import React from 'react';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import './NurseDetail.css'; // Import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function NurseDetail({ _id, name, nic, email, phone, appnumber, rnumber, time, diseases, description }) {
  //delete function start code
  const history=useNavigate();

  const deleteHandler = async()=>{

    console.log(_id); 


    await axios.delete(`http://localhost:5000/nurses/${_id}`)
    .then(res => res.data)
    .then(() => {
      alert("Delete Appoinment successful!"); // Show success alert
      history("/"); // Navigate to home
      history("/appoinmentdetails"); // Navigate to appointment details
    })
  }//delete function end code



  return (
    <div className="nurse-detail-container">
      <h1>Display Details</h1>
      <br />
      <h1>ID: {_id || 'N/A'}</h1>
      <h1>Name: {name}</h1>
      <h1>NIC: {nic}</h1>
      <h1>Email: {email}</h1>
      <h1>Phone: {phone}</h1>
      <h1>Appointment Number: {appnumber}</h1>
      <h1>Room Number: {rnumber}</h1>
      <h1>Time: {time}</h1>
      <h1>Diseases: {diseases}</h1>
      <h1>Description: {description || 'N/A'}</h1> {/* Display 'N/A' if discription is empty */}
      <div>
        
      <button><Link to={`/appoinmentdetails/${_id}`}>Update</Link></button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default NurseDetail;
