import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({title}) => {

    return (
        <footer className="flex flex-col items-center bg-black text-white py-10 md:px-20 mt-28">
            <h2 className="text-4xl font-bold mb-12 text-center">{title}</h2>
            <div className='border border-white mb-8 w-[93%]'></div>
            <div className="w-full md:px-20 md:ml-10 md:space-x-96 px-4 flex flex-col md:flex-row">
                <div className="flex flex-col md:flex-row md:space-x-16 mb-8 md:mb-0">
                    <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-16">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Reach us</h3>
                            <p className="text-sm">
                                <a href="tel:+0123456789" className="block">+012 3456 789</a>
                                <a href="mailto:travelhub@gmail.com" className="block">travelhub@gmail.com</a>
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
                                <li><Link to="/terms"className="hover:underline">Terms of Use</Link></li>
                                <li><Link to="/terms" className="hover:underline">Refund Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col bg-[#131313] p-4 md:w-[50vh]'>
                    <h3 className="text-lg font-semibold mb-2">Join Our Newsletter</h3>
                    <form className="flex flex-row">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="p-2 rounded rounded-r-none bg-[#1E1E1E] text-white text-sm w-[70%ter]"
                        />
                        <button type="submit" className="px-4 p-2 bg-black text-white rounded-l-none rounded">
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
