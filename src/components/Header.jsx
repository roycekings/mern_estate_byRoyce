import React from 'react'
import { CiSearch } from "react-icons/ci";
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <header className=' w-full bg-slate-950 shadow-md'>
    <div className='p-3 mx-auto flex justify-between max-w-6xl items-center'>
    <Link to='/' className=' flex flex-wrap font-bold  text-sm sm:text-xl '>
            <span className=' text-slate-200'>Royces<span className=' text-orange-300'>@</span> </span>
            <span className=' text-white'>Estate</span>
        </Link>

        <form className=' hover:outline-double text-white px-2 py-1 border gap-2 rounded-md flex items-center bg-slate-600'>
         <input className='   w-24 sm:w-64   bg-transparent outline-none '  type="text" placeholder='search...' />
            <CiSearch className=' w-6 h-6' />        
            
        </form>

        <ul className=' text-white flex  gap-4'>
          <Link to='/' className='hidden sm:inline text-slate-100 hover:underline cursor-pointer '>Home</Link>
          <Link to='/about' className='hidden sm:inline text-slate-100 hover:underline cursor-pointer  ' >About</Link>
          <Link to = "/signin" className='hidden sm:inline text-slate-100 hover:underline  cursor-pointer ' >Sign in</Link>
        </ul>
    </div>
    </header>
  )
}
