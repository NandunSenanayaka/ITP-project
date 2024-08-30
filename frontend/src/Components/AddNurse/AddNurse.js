import React from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
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
      <Nav></Nav>
      <h1>Display Details</h1>
     
    </div>
  );
}

export default AddNurse;
