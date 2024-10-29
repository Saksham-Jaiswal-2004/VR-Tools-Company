import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import { Element } from 'react-scroll'

const HeroSection = () => {
  return (
    <div name="Home" className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            VirtualR build tools
            <span className='bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text'>{" "}for Developers</span>
        </h1>

        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Empowering developers to craft immersive experiences with cutting-edge virtual reality tools—unlocking new dimensions of creativity and innovation.</p>

        <div className="flex justify-center my-10">
            <a href="#" className='bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4 mx-3 rounded-md hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-500 transition duration-400'>Start for Free</a>
            <a href="#" className='py-3 px-4 mx-3 rounded-md border hover:text-purple-500 hover:border-purple-500 transition-all duration-400'>Documentation</a>
        </div>

        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-purple-700 shadow-purple-700 mx-2 my-4' src={video1} type='video/mp4' alt="video1.mp4"></video>
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-purple-700 shadow-purple-700 mx-2 my-4' src={video2} type='video/mp4' alt="video2.mp4"></video>
        </div>
    </div>
  )
}

export default HeroSection
