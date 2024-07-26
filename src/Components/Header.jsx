import React from 'react';
import {FaSearch} from 'react-icons/fa';
import { Link } from "react-router-dom";

function Header(){
  return (
    <header className="bg-black shadow-md mt-5">
    <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <Link to="/">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-orange-500">Crunchyroll</span>
        </h1>
      </Link>

      <form className="bg-slate-100 p-1 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-20 sm:w-64"
          />
          <FaSearch className='text-slate-900' />
        </form>

         </div>
  </header>
  )
}

export default Header
