import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import './UpdateNurse.css'; // Import the CSS file

function UpdateNurse() {
  const [inputs, setInputs] = useState({
    id: null,
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
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios

        .get(`http://localhost:5000/nurses/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.nurse1 || {})); // Added fallback for undefined
    };

    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/nurses/${id}`, {
        name: inputs.name,
        nic: inputs.nic,
        email: inputs.email,
        phone: Number(inputs.phone),
        appnumber: Number(inputs.appnumber),
        rnumber: Number(inputs.rnumber),
        time: inputs.time,
        diseases: inputs.diseases,
        description: inputs.description,
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/appoinmentdetails"));
  };

  return (
    
    <div className="update-container">
      <h1>Update Nurse Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={inputs.name || ""}
            required
          />
        </div>

        <div className="form-group">
          <label>NIC</label>
          <input
            type="text"
            name="nic"
            onChange={handleChange}
            value={inputs.nic || ""}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={inputs.email || ""}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="number"
            name="phone"
            onChange={handleChange}
            value={inputs.phone || ""}
            required
          />
        </div>

        <div className="form-group">
          <label>Appointment Number</label>
          <input
            type="number"
            name="appnumber"
            onChange={handleChange}
            value={inputs.appnumber || ""}
            required
          />
        </div>

        <div className="form-group">
          <label>Room Number</label>
          <input
            type="number"
            name="rnumber"
            onChange={handleChange}
            value={inputs.rnumber || ""}
            required
          />
        </div>

        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            name="time"
            onChange={handleChange}
            value={inputs.time || ""}
            required
          />
        </div>

        <div className="form-group">
          <label>Diseases</label>
          <input
            type="text"
            name="diseases"
            onChange={handleChange}
            value={inputs.diseases || ""}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={inputs.description || ""}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default UpdateNurse;
