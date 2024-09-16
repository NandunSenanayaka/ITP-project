

import React, { useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import './AddNurse.css';
import { useNavigate } from "react-router-dom";

function AddNurse() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    nic: "",
    email: "",
    phone: "",
    appnumber: "",
    rnumber: "",
    time: "",
    diseases: "",
    description: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => {
        alert("Data saved successfully!");
        navigate("/appoinmentdetails");
      })
      .catch((error) => {
        alert("Failed to save data. Please try again.");
        console.error("Navigation skipped due to error:", error);
      });
  };

  const sendRequest = async () => {
    const data = {
      name: inputs.name,
        nic: inputs.nic,
        email: inputs.email,
        phone: Number(inputs.phone),
        appnumber: Number(inputs.appnumber),
        rnumber: Number(inputs.rnumber),
        time: inputs.time,
        diseases: inputs.diseases,
        description: inputs.description,
    }
    console.log(data)
    try {
      const response = await axios.post("http://localhost:5000/nurses", data);
      console.log("dsfsdfsdfsdfs");
      console.log(response.data); // Log the response data for debugging
      return response.data;
    } catch (error) {
      console.error("Error sending request:", error); // Log the error for debugging
      throw error;
    }
  };

  return (
    <div>
      <Nav />
      <div className="form-container">
        <h1>Add Nurse Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={inputs.name}
              required
            />
          </div>

          <div className="form-group">
            <label>NIC</label>
            <input
              type="text"
              name="nic"
              onChange={handleChange}
              value={inputs.nic}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              value={inputs.phone}
              required
            />
          </div>

          <div className="form-group">
            <label>Appointment Number</label>
            <input
              type="number"
              name="appnumber"
              onChange={handleChange}
              value={inputs.appnumber}
              required
            />
          </div>

          <div className="form-group">
            <label>Room Number</label>
            <input
              type="number"
              name="rnumber"
              onChange={handleChange}
              value={inputs.rnumber}
              required
            />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              onChange={handleChange}
              value={inputs.time}
              required
            />
          </div>

          <div className="form-group">
            <label>Diseases</label>
            <input
              type="text"
              name="diseases"
              onChange={handleChange}
              value={inputs.diseases}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              value={inputs.description}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddNurse;
