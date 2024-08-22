import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ title }) => {
    return (
        <footer className="flex flex-col items-center bg-black h-auto text-white py-10 px-9 sm:px-10 md:px-28 lg:px-32 xl:px-40  mt-28">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{title}</h2>
            <div className='border border-white mb-8 w-full'></div>

            <div className="w-full  p-1 flex flex-col lg:flex-row justify-between md:items-start items-center lg:space-x-10">
                
                {/* First Column */}
                <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-16 mb-8 md:mb-0 text-center md:text-left w-full md:w-auto">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Reach us</h3>
                        <p className="text-sm">
                            <a href="tel:+0123456789" className="block">+012 3456 789</a>
                            <a href="mailto:Travelastic@gmail.com" className="block">Travelastic@gmail.com</a>
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Company</h3>
                        <ul className="space-y-1">
                            <li><Link to="/AboutUs" className="hover:underline">About</Link></li>
                            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                            <li><Link to="/Blog" className="hover:underline">Blogs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Legal</h3>
                        <ul className="space-y-1">
                            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:underline">Terms & Services</Link></li>
                            <li><Link to="/terms" className="hover:underline">Terms of Use</Link></li>
                            <li><Link to="/terms" className="hover:underline">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>
                
                {/* Second Column */}
                <div className='flex flex-col bg-[#131313] p-4 h-full w-82 md:w-96 max-w-full'>
                    <h3 className="text-lg font-semibold mb-2">Join Our Newsletter</h3>
                    <form className="flex flex-col sm:flex-row w-full space-y-2 sm:space-y-0">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="p-2 rounded rounded-r-none bg-[#1E1E1E] text-white text-sm w-full sm:w-auto flex-1"
                        />
                        <button type="submit" className="px-4 p-2 bg-black text-white rounded-l-none rounded w-full sm:w-auto">
                            Subscribe
                        </button>
                    </form>
                    <p className="text-sm mt-2">* Will send you weekly updates for your better tool management.</p>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
