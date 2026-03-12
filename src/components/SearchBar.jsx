import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='relative w-full md:w-96 group'>
            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                <IoSearchOutline className='text-gray-400 group-focus-within:text-red-500 transition-colors duration-300 text-xl' />
            </div>

            <input 
                type="text"
                placeholder='Search driver, team or number...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='block w-full pl-11 pr-4 py-3 bg-[#15151e] border-2 border-gray-800 rounded-xl
                            text-white placeholder-gray-500
                            focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600
                            transition-all duration-300 shadow-lg italic font-medium'
                />

                {searchTerm && (
                    <button
                        onClick={() => setSearchTerm("")}
                        className='absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors'
                        >
                            x
                        </button>
                )}
        </div>
    )
}