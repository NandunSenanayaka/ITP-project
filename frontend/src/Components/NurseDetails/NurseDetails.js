import React, { useEffect, useState ,useRef} from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import NurseDetail from './NurseDetail';
import {useReactToPrint} from "react-to-print";




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

  //pdf download function part start
  // const ComponentsRef = useRef();
  // const handlePrint =useReactToPrint({
  //   content:()=> ComponentsRef.Current,
  //   DocumentTitle:"Appointment Report",
  //   onafterprint :()=> alert("Users Report Successfully Download !"),

  // })
  const componentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentsRef.current,  // Fixed the typo here
    documentTitle: 'Appointment Report',
    onAfterPrint: () => alert('Users Report Successfully Downloaded!'),
  });




  return (
    <div>
      <Nav />
      <h1>Nurse Details Display Page</h1>
      <div ref={componentsRef}>
        {nurseDetails && nurseDetails.map((nurseDetail, i) => (
          <div key={i}>
            <NurseDetail {...nurseDetail} />
          </div>
        ))}
      </div>
      <button onClick={handlePrint}>Download Report</button>
    </div>
  );
}

export default NurseDetails;


