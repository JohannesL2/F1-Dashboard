import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const DriverDashboard = () => {
    const [carData, setCarData] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
    const res = await axios.get('https://api.openf1.org/v1/drivers');
    setCarData(res.data.slice(0, 20));
    console.log(res.data)
  } catch (error) {
    console.error('Error fetching f1 data', error);
  }
}

fetchData();
}, []);


  return (
    <div>
    
          <Link 
      to='/'
      className='p-4 flex items-center gap-2 font-bold'
      > <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
      Go back</Link>

    <table className="table-auto w-full">
      <thead>
        <tr className="bg-gray-100">
          <th></th>
          <th>Driver number</th>
          <th>Name</th>
          <th>Team</th>
          <th>Country</th>
        </tr>
      </thead>
    <tbody>
    {carData.map((item, index) => (
      <tr key={index} className="text-center border-1">
      <td><img src={item.headshot_url} alt="" /></td>
      <td>{item.driver_number}</td>
      <td>{item.full_name}</td>
      <td>{item.team_name}</td>
      <td>{item.country_code}</td>
      </tr>
    ))}
    </tbody>
    </table>
    </div>
  )
}

export default DriverDashboard