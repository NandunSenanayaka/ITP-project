import React from 'react';

function NurseDetail({ _id, name, nic, email, phone, appnumber, rnumber, time, diseases, description }) {
  return (
    <div>
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
      <h1>Description: {description}</h1>
    </div>
  );
}

export default NurseDetail;
