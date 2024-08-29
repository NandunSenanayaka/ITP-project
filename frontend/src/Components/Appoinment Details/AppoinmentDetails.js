import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import axios from "axios";
import AppoinmentDetail from './AppoinmentDetails'; // Corrected import

const URL = "http://localhost:5000/nurses";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function AppoinmentDetails() {
  const [appoinmentDetails, setAppoinmentDetails] = useState([]);
  
  useEffect(() => {
    fetchHandler().then((data) => setAppoinmentDetails(data.appoinmentDetails || []));
  }, []);

  return (
    <div>
      <Nav />
      <h1>Appointment Details Display Page</h1>
      <div>
        {appoinmentDetails && appoinmentDetails.map((appoinmentDetail, i) => (
          <div key={i}>
            <AppoinmentDetail appoinmentDetail={appoinmentDetail} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppoinmentDetails;
