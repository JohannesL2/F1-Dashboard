import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const DriverDashboard = () => {
    const [carData, setCarData] = useState([]);
    const [loading, setLoading] = useState(true)

  useEffect(() => {
  const fetchData = async () => {
    try {
    const res = await axios.get('https://api.openf1.org/v1/drivers');
    setCarData(res.data.slice(0, 20));
    setLoading(false)
  } catch (error) {
    console.error('Error fetching f1 data', error);
    setLoading(false)
  }
}

fetchData();
}, []);


useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 5000);
  return () => clearTimeout(timer);
}, []);

//skeleton
function SkeletonLoader() {
  return (
    
<div role="status" class="fixed inset-0 p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700 mt-30">
    <div class="flex items-center justify-between">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
        <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
        <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
        <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>

  )
}


  return (
    <div>
    
          <Link 
      to='/'
      className='p-4 flex items-center gap-2 font-bold'
      > <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
      Go back</Link>

    
    {loading ? (
      <SkeletonLoader/>
    ) : (
      <>
    <table className="table-auto w-full border-collapse hidden sm:table">
      <thead>
        <tr className="bg-gray-100">
          <th></th>
          <th>Driver number</th>
          <th>Name</th>
          <th className='hidden sm:table-cell'>Team</th>
          <th className='hidden md:table-cell'>Team Colour</th>
          <th className='hidden md:table-cell'>Country</th>
        </tr>
      </thead>
    <tbody>
    {carData.map((item, index) => (
      <tr key={index} className="text-center border">
      <td><img src={item.headshot_url} alt="" className='mx-auto w-24 h-24 sm:w-16 sm:h-16 object-contain rounded-full'/></td>
      <td>{item.driver_number}</td>
      <td>{item.full_name}</td>
      <td className='hidden sm:table-cell'>{item.team_name}</td>
      <td 
        className='hidden md:table-cell'
        style={{backgroundColor: `#${item.team_colour}`}}></td>
      <td className='hidden md:table-cell'>{item.country_code}</td>
      </tr>
    ))}
    </tbody>
    </table>

    {/*Cards view for mobile*/}
    <div className='sm:hidden space-y-4 bg-gray-900 p-4'>
      {carData.map((item) => (
        <div
          key={item.driver_number}
          className='bg-gradient-to-r from-gray-800 via-gray-900 to-black border border-red-600 rounded-xl flex items-center gap-6 p-5 shadow-lg hover:shadow-red-600 transition-shadow duration-300 text-white'
        >
          <img src={item.headshot_url} alt={item.full_name} 
          className='w-16 h-16 rounded-full object-contain'
          />
          <div className='flex flex-col flex-grow min-w-0'>
            <span className='font-bold text-lg flex items-center gap-2'>
              {item.full_name} <span className='font-normal'>{item.country_code}</span>
            </span>
            <span className='truncate text-sm text-gray-300'>
              {item.team_name}
            </span>
          </div>
          <div className='text-red-600 font-mono font-bold text-lg flex-shrink-0'>{item.driver_number}</div>
          <div className='w-8 h-8 rounded-full flex-shrink-0 border-2 border-white shadow-md' style={{backgroundColor: `#${item.team_colour}`}}/>
        </div>
      ))}
      
    </div>
    </>
    )}
    </div>
    
  )
}

export default DriverDashboard