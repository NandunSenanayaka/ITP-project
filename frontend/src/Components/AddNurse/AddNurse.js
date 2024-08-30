import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddNurse({ _id, name, nic, email, phone, appnumber, rnumber, time, diseases, description }) {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/update-nurse/${_id}`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/nurses/${_id}`);
      alert('Nurse record deleted successfully');
      navigate('/nurses');
    } catch (error) {
      console.error('Failed to delete nurse record:', error);
    }
  };

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
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default AddNurse;
