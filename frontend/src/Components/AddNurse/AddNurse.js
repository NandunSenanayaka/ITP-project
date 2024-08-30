// export default AddNurse;
import React, { useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
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
    discription: "", // Updated field name
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
        navigate("/appoinmentdetails");
      })
      .catch((error) => {
        console.error("Navigation skipped due to error:", error);
      });
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/nurses", {
        name: String(inputs.name),
        nic: String(inputs.nic),
        email: String(inputs.email),
        phone: Number(inputs.phone),
        appnumber: Number(inputs.appnumber),
        rnumber: Number(inputs.rnumber),
        time: String(inputs.time),
        diseases: String(inputs.diseases),
        discription: String(inputs.discription), // Updated field name
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <Nav />
      <h1>Add Details</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name}
          required
        />
        <br />
        <br />
        <label>NIC</label>
        <br />
        <input
          type="text"
          name="nic"
          onChange={handleChange}
          value={inputs.nic}
          required
        />
        <br />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={inputs.email}
          required
        />
        <br />
        <br />
        <label>Phone Number</label>
        <br />
        <input
          type="number"
          name="phone"
          onChange={handleChange}
          value={inputs.phone}
          required
        />
        <br />
        <br />
        <label>Appointment Number</label>
        <br />
        <input
          type="number"
          name="appnumber"
          onChange={handleChange}
          value={inputs.appnumber}
          required
        />
        <br />
        <br />
        <label>Room Number</label>
        <br />
        <input
          type="number"
          name="rnumber"
          onChange={handleChange}
          value={inputs.rnumber}
          required
        />
        <br />
        <br />
        <label>Time</label>
        <br />
        <input
          type="time"
          name="time"
          onChange={handleChange}
          value={inputs.time}
          required
        />
        <br />
        <br />
        <label>Diseases</label>
        <br />
        <input
          type="text"
          name="diseases"
          onChange={handleChange}
          value={inputs.diseases}
          required
        />
        <br />
        <br />
        <label>Description</label>
        <br />
        <input
          type="text"
          name="description" // Corrected field name
          onChange={handleChange}
          value={inputs.description}
          required
        />

        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNurse;
