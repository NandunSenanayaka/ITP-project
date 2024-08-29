import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// function AddAppoinment(props) {
//   const { _id, name, nic, email, phone, appnumber, rnumber, time, diseases, discription } = props;

   function AddAppoinment({ NurseControler }) {
    const {  _id, name, nic, email, phone, appnumber, rnumber, time, diseases, discription } = NurseControler || {};

  // function Treatment({ treatment }) {
  //   const { _id, name, description, benefit, duration } = treatment || {};
  return (
    <div>
      <h1>Display details</h1>
      <br></br>
      <h1>ID: {_id || "N/A"}</h1>
      <h1>Name: {name}</h1>
      <h1>NIC: {nic}</h1>
      <h1>Email: {email}</h1>
      <h1>Phone: {phone}</h1>
      <h1>Appoinment Number: {appnumber}</h1>
      <h1>Room Number: {rnumber}</h1>
      <h1>Time: {time}</h1>
      <h1>Diseases: {diseases}</h1>
      <h1>Discription: {discription}</h1>
      <button>Update</button>
      <button>Delete</button>
    </div>
  );
}

export default AddAppoinment;
