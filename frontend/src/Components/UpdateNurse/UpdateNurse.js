
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

function UpdateNurse() {
  const [inputs, setInputs] = useState({
    name: '',
    nic: '',
    email: '',
    phone: '',
    appnumber: '',
    rnumber: '',
    time: '',
    diseases: '',
    description: ''
  });
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/nurses/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.nurse || {})); // Added fallback for undefined
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
    sendRequest().then(() => history('/appoinmentdetails'));
  };

  return (
    <div>
      <h1>Update Nurse Details</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name || ''} // Prevents undefined values
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
          value={inputs.nic || ''} // Prevents undefined values
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
          value={inputs.email || ''} // Prevents undefined values
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
          value={inputs.phone || ''} // Prevents undefined values
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
          value={inputs.appnumber || ''} // Prevents undefined values
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
          value={inputs.rnumber || ''} // Prevents undefined values
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
          value={inputs.time || ''} // Prevents undefined values
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
          value={inputs.diseases || ''} // Prevents undefined values
          required
        />
        <br />
        <br />
        <label>Description</label>
        <br />
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={inputs.description || ''} // Prevents undefined values
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateNurse;
