import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/logo.png'
import { Menu, X } from 'lucide-react'
import { navItems } from '../constants'

const Navbar = () => {
    const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setmobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <a href="#" className='flex flex-row items-center'>
                      <img className='h-10 w-10 mr-2' src={logo} alt="" />
                      <span className="text-xl tracking-tight">VirtualR</span>
                    </a>
                </div>

                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            {/* <a href={item.href} className='hover:text-orange-500 transition-all duration-400'>{item.label}</a> */}
                            <Link to={item.label} offset={-100} className='cursor-pointer hover:text-purple-500 transition-all duration-400'>{item.label}</Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className='hover:text-purple-500 hover:border-purple-500 transition-all duration-400 py-2 px-3 border rounded-md'>Sign-In</a>
                    <a href="#" className='hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-500 transition-all duration-400 bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md'>Create an Account</a>
                </div>

                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen? <X/> : <Menu/>}
                    </button>
                </div>
            </div>

            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center text-center items-center lg:hidden">
                    <ul>
                      {navItems.map((item, index) => (
                        <li key={index} className='py-4'>
                            <a href={item.href} className='hover:text-purple-500 transition-all duration-400'>{item.label}</a>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap  justify-center">
                      <a href="#" className='hover:text-purple-500 hover:border-purple-500 transition-all duration-400m-2 py-2 px-3 border rounded-md'>Sign-In</a>
                      <a href="#" className='hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-500 transition-all duration-400 m-2 bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md'>Create an Account</a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
