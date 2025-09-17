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
      <tr key={item.Constructor.constructorId} className="text-center border">
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
    <div className='sm:hidden space-y-4 bg-gray-900 p-4'>
      {carData.map((item) => (
        <div
          key={item.Constructor.constructorId}
          className='bg-gradient-to-r from-gray-800 via-gray-900 to-black border border-red-600 rounded-xl flex items-center gap-6 p-5 shadow-lg hover:shadow-red-600 transition-shadow duration-300 text-white'
        >
          <img src={team_logo.McLaren} alt="" />
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
    
  )
}

export default CarDashboard