import React from 'react'
import BG from '../../assets/image copy 8.png'
const joinUs = () => {
  return (
    <div className="relative w-full h-screen bg-black">
      <img 
        src={BG}
        alt="Background" 
        className="absolute w-full h-full object-cover opacity-70"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold mb-4">JOIN US</h1>
        <p className="mb-8 max-w-lg">
          Join Travel Hub to enlighten your career and give you a boost for your better future.
          Checkout this page to know if you fit the best for our company.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-md">
            Join the team
          </button>
          <button className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md">
            Culture
          </button>
        </div>
      </div>
    </div>
  )
}

export default joinUs