import React from 'react'
import img1 from '../../assets/alla-havriushenko-7LpEmYW9YUE-unsplash copy.webp'
import img2 from '../../assets/aston-holtes-1CSrMUaua8k-unsplash copy.webp'
import img3 from '../../assets/ishan-seefromthesky-rj8fMHNPXbg-unsplash copy.webp'
import img4 from '../../assets/varvara-povarova-sU79HxQ8jUI-unsplash copy.webp'
import img5 from '../../assets/eryk-piotr-munk-hZzaPrIc3xU-unsplash.webp'


const body = () => {
  return (
    <div className="bg-white text-black font-Poppins">
      {/* Header Section */}
      <section className="text-center py-20 bg-black">
        <h1 className="md:text-5xl text-3xl md:font-bold font-semibold md:mb-4 mb-8 text-white">About Us</h1>
        <p className="md:text-lg text-base text-gray-300">Discover the world with Travelastic</p>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-5 md:px-20 lg:px-40">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-lg mb-4">
              Travelastic was founded with the belief that travel should be accessible to everyone. We are passionate about
              exploring new destinations and sharing our experiences with others. Whether you are planning a weekend getaway
              or a round-the-world adventure, Travelastic is here to guide you every step of the way.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img src={img1} alt="Our Story" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-black text-white py-16 px-5 md:px-20 lg:px-40">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold">Our Mission</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img src={img2}alt="Our Mission" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <p className="text-lg">
              Our mission is to make travel an unforgettable experience for everyone. We believe in providing the best
              travel solutions by offering personalized recommendations, expert travel advice, and access to the best
              destinations worldwide. At Travelastic, we are committed to helping you create memories that will last a
              lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16 px-5 md:px-20 lg:px-40">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold">Explore the World with Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative group">
            <img src={img3} alt="Destination 1" className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-bold">BALI</p>
            </div>
          </div>
          <div className="relative group">
            <img src={img4} alt="Destination 2" className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-bold"></p>
            </div>
          </div>
          <div className="relative group">
            <img src={img5} alt="Destination 3" className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-bold">Destination 3</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default body