import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const CarDashboard = () => {
    const [carData, setCarData] = useState([]);
    const [loading, setLoading] = useState(true)

  useEffect(() => {
  const fetchData = async () => {
    try {
    const res = await axios.get('https://api.jolpi.ca/ergast/f1/2025/constructorstandings/?format=json');

    const constructors = 
      res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    setCarData(constructors);
    setLoading(false)
  } catch (error) {
    console.error('Error fetching f1 data', error);
    setLoading(false)
  }
}

fetchData();
}, []);

const team_logo = {
  McLaren: "https://upload.wikimedia.org/wikipedia/en/6/66/McLaren_Racing_logo.svg",
  Ferrari: "https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515318_10187.png",
  Mercedes: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mercedes-Benz_in_Formula_One_logo.svg/375px-Mercedes-Benz_in_Formula_One_logo.svg.png",
  RedBull: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_bull_racing.png",
  AstonMartin: "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Aston_Martin_Aramco_2024_logo.png/330px-Aston_Martin_Aramco_2024_logo.png",
  Williams: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Atlassian_Williams_Racing_2025.svg/375px-Atlassian_Williams_Racing_2025.svg.png",
};

useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 5000);
  return () => clearTimeout(timer);
}, []);

//skeleton
function SkeletonLoader() {
  return (
    <div className="w-full space-y-4 animate-pulse px-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-24 bg-gray-900/50 border border-white/10 rounded-xl" />
        ))}
      </div>
  )
}


  return (
    <div className='min-h-screen bg-[#0b0b0b] text-white pt-24 pb-10 overflow-x-hidden'>
    <div className='max-w-7xl mx-auto px-4'>

<h1 className="text-xl font-bold mb-4">F1 Constructor Standings 2025</h1>
    
    {loading ? (
      <SkeletonLoader/>
    ) : (
      <>
    <table className="table-auto w-full border-collapse hidden sm:table">
      <thead>
        <tr className="bg-gray-100">
          <th>Image</th>
          <th>Position</th>
          <th>Team</th>
          <th>Nationality</th>
          <th>Points</th>
          <th>Wins</th>
        </tr>
      </thead>
    <tbody>
    {carData.map((item) => (
      <tr key={item.Constructor.constructorId} className="text-center border-b border-gray-700 
             bg-gray-900 hover:bg-gray-800 
             transition-colors duration-300">
      <td>
        {team_logo[item.Constructor.name] && (
      <img src={team_logo[item.Constructor.name]} alt="" className='size-16 border-1 m-2'/>
        )}
      </td>
      <td>{item.position}</td>
      <td><a href={item.Constructor.url} className='text-blue-600 hover:underline'>{item.Constructor.name}</a></td>
      <td>{item.Constructor.nationality}</td>
      <td>{item.points}</td>
      <td>{item.wins}</td>
      </tr>
    ))}
    </tbody>
    </table>

    {/*Cards view for mobile*/}
    <div className='sm:hidden space-y-4 p-4 bg-[#0b0b0b] overflow-x-hidden'>
      {carData.map((item) => (
       <div className='flex items-center gap-4 mb-3'>
        <div className='w-12 h-12 flex-shrink-0'>
           <img 
             src={team_logo[item.Constructor.name] || team_logo.McLaren} 
             alt="" 
             className="w-full h-full object-contain"
           />
        </div>
<a href={item.Constructor.url} className='text-blue-600 hover:underline'>{item.Constructor.name}</a>
          <div className='flex flex-col flex-grow min-w-0'>
            <span className='font-bold text-lg flex items-center gap-2'>
              {item.position} <span className='font-normal'>{item.Constructor.nationality}</span>
            </span>
            <span className='truncate text-sm text-gray-300'>
              Points: {item.points}
            </span>
          </div>
          <div className='text-red-600 font-mono font-bold text-lg flex-shrink-0'><span className='text-stone-300'>Wins:</span> {item.wins}</div>
          <div className='w-8 h-8 rounded-full flex-shrink-0 border-2 border-white shadow-md' style={{backgroundColor: `#${item.team_colour}`}}/>
        </div>
        
      ))}
      
    </div>
    </>
    )}
    </div>
    </div>
    
  )}

export default CarDashboard