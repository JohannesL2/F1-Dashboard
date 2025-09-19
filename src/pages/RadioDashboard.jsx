import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

const RadioDashboard = () => {
    const [carData, setCarData] = useState([]);
    const [loading, setLoading] = useState(true)

  useEffect(() => {
  const fetchData = async () => {
    try {
      const [radioRes, driversRes] = await Promise.all([
        axios.get('https://api.openf1.org/v1/team_radio'),
        axios.get('https://api.openf1.org/v1/drivers')
      ]);

      const radioData = radioRes.data.slice(0, 20);
      const drivers = driversRes.data;

      const enrichedData = radioData.map((item) => {
        const match = drivers.find(
          (driver) => driver.driver_number === item.driver_number
        );
        return {
          ...item,
          full_name: match?.full_name || 'Unknown',
          team_name: match?.team_name || 'Unknown',
          team_colour: match?.team_colour || '000000',
          headshot_url: match?.headshot_url || '',
          country_code: match?.country_code || '',
        }
      })

    setCarData(enrichedData);
    setLoading(false)
  } catch (error) {
    console.error('Error fetching f1 data', error);
    setLoading(false)
  }
}

fetchData();
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
      className='group inline-flex items-center gap-2 px-5 py-3 font-bold uppercase tracking-wide 
      bg-gradient-to-r from-red-600 via-red-700 to-black 
      text-white rounded-lg shadow-lg
      transition-all duration-300 
      hover:scale-105 hover:shadow-red-500/50 m-2'
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
    <tr key={item.recording_url || index} className="text-center border-b border-gray-700 
             bg-gray-900 hover:bg-gray-800 
             transition-colors duration-300">
      <td>
        <img 
          src={item.headshot_url} 
          alt="" 
          className='mx-auto w-24 h-24 sm:w-16 sm:h-16 object-contain rounded-full'
        />
      </td>
      <td>{item.driver_number}</td>
      <td>{item.full_name}</td>
      <td className='hidden sm:table-cell'>{item.team_name}</td>
      <td 
        className='hidden md:table-cell'
        style={{ backgroundColor: `#${item.team_colour}` }}
      />
      <td className='hidden md:table-cell'>{item.country_code}</td>
      <td>
        <audio controls className='mx-auto'>
          <source src={item.recording_url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
              </td>
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
<audio controls aria-label={`Radio clip from ${item.full_name}`} className=''>
  <source src={item.recording_url} type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
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

export default RadioDashboard