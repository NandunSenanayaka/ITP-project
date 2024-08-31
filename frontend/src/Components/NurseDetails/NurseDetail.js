import React from 'react';
import Nav from '../Nav/Nav';
import './NurseDetail.css'; // Import the CSS file


function NurseDetail({ _id, name, nic, email, phone, appnumber, rnumber, time, diseases, description }) {
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
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default NurseDetail;
