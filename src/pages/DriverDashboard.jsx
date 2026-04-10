import React from 'react'
import axios from "axios"
import { useRef, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { ImageModal } from '../components/ImageModal'
import { SearchBar } from '../components/SearchBar'
import Header from '../components/Header'

const DriverDashboard = () => {
    const [carData, setCarData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const modalRef = useRef(null);

    const filteredDrivers = carData.filter(driver =>
      driver.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.team_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.driver_number.toString().includes(searchTerm)
    )

    const openModal = (driver) => {
      modalRef.current?.show(driver)
    }

  useEffect(() => {
  const fetchData = async () => {
    try {
    const res = await axios.get('https://api.openf1.org/v1/drivers');
    
    const uniqueDrivers = res.data.reduce((acc, current) => {
      const x = acc.find(item => item.driver_number === current.driver_number);
      if (!x) return acc.concat([current]);
      return acc;
    }, [])


    setCarData(uniqueDrivers.slice(0, 20));
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
<div role="status" class="w-full p-4 space-y-4 border border-white/10 divide-y divide-white/10 rounded-xl bg-gray-900/50 animate-pulse">
    <div class="flex items-center justify-between pt-4 first:pt-0">
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
    <div className="flex flex-col min-h-screen bg-[#0b0b0b] text-white font-sans pt-16 md:pt-20">
    
    <div className='max-w-7xl mx-auto w-full px-4 md:px-8 pb-4'>
        <div className='flex justify-end'>
          <div className="w-full sm:w-80"> 
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>
      </div>

<div className='max-w-7xl mx-auto w-full px-4 md:px-8'>
    {loading ? (
      <SkeletonLoader/>
    ) : (
      <>
    <table className="table-auto w-full border-collapse hidden sm:table">
      <thead>
        <tr className="bg-gradient-to-r from-gray-800 via-red-700 to-black text-white">
          <th></th>
          <th>Driver number</th>
          <th>Name</th>
          <th className='hidden sm:table-cell'>Team</th>
          <th className='hidden md:table-cell'>Team Colour</th>
          <th className='hidden md:table-cell'>Country</th>
        </tr>
      </thead>
    <tbody>
    {filteredDrivers.map((item, index) => (
      <tr key={index} className="text-center border-b border-gray-700 
             bg-gray-900 hover:bg-gray-800 
             transition-colors duration-300">
      <td
        className='p-3 cursor-pointer'
        onClick={() => openModal(item)}
      >
        <img src={item.headshot_url} alt="" className='mx-auto w-24 h-24 sm:w-16 sm:h-16 object-contain rounded-full'/></td>
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
      {filteredDrivers.map((item) => (
        <div
          key={item.driver_number}
          className='bg-gradient-to-r from-gray-800 via-gray-900 to-black border border-red-600 rounded-xl flex items-center gap-6 p-5 shadow-lg hover:shadow-red-600 transition-shadow duration-300 text-white'
        >
          <img src={item.headshot_url} alt={item.full_name} 
          className='w-16 h-16 rounded-full object-contain'
        onClick={() => openModal(item)}
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
    <ImageModal ref={modalRef}/>
    </div>
    
  )
}

export default DriverDashboard