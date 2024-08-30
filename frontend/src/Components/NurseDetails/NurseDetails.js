import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import NurseDetail from './NurseDetail';

// const URL = "http://localhost:5000/nurses";

// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// };

// function NurseDetails() {
//   const [nurseDetails, setNurseDetails] = useState([]);

//   useEffect(() => {
//     fetchHandler().then((data) => setNurseDetails(data.nurseDetails || []));
//   }, []);

//   return (
//     <div>
//       <Nav />
//       <h1>Nurse Details Display Page</h1>
//       <div>
//         {nurseDetails && nurseDetails.map((nurseDetail, i) => (
//           <div key={i}>
//             <NurseDetail {...nurseDetail} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NurseDetails;
const URL = "http://localhost:5000/nurses";

const fetchHandler = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;  // Ensure that response.data matches the expected structure
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

function NurseDetails() {
  const [nurseDetails, setNurseDetails] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => {
      console.log(data); // Log the data to verify its structure
      setNurseDetails(data.nurses || []); // Ensure this matches the data structure from the backend
    });
  }, []);

  return (
    <div>
      <Nav />
      <h1>Nurse Details Display Page</h1>
      <div>
        {nurseDetails && nurseDetails.map((nurseDetail, i) => (
          <div key={i}>
            <NurseDetail {...nurseDetail} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NurseDetails;

