import React from 'react';
import air from '../../assets/image copy 7.png';
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const MainBodyForm = () => {
    return (
        <div className='bg-white shadow-md mx-4 md:mx-48 mt-8 pb-10 rounded-lg flex flex-col md:flex-row relative '>
                    <div className='overflow-hidden relative md:h-auto h-[55vh] w-[40vh] md:w-[35vw] md:mb-5 md:m-0 mx-8  bg-black rounded-lg md:rounded-br-none md:space-y-28'>
            <div className="text-white flex flex-col justify-center text-center md:text-start pt-6 pl-4 md:pl-8">
                <h1 className='text-xl md:text-2xl font-semibold mb-2'>Contact Information</h1>
                <p className='text-xs md:text-sm text-gray-300'>
                    Say something to start a live chat!
                </p>
            </div>
            <div className='flex flex-col items-center md:items-start space-y-6 md:space-y-10 text-xs md:text-sm text-white mt-4 md:mt-8 ml-4 md:ml-8'>
                <p className="flex items-center md:flex-row flex-col"><FaPhoneVolume className='mr-4 md:mr-6 text-base md:text-lg md:mb-0 mb-4 ' /><span>+1012 3456 789</span></p>
                <p className="flex items-center md:flex-row flex-col"><MdEmail className='mr-4 md:mr-6 text-base md:text-lg md:mb-0 mb-4' /><span>demo@gmail.com</span></p>
                <p className="md:flex  items-center md:flex-row flex-col  hidden"><CgProfile className='mr-4 md:mr-6 text-base md:text-lg ' /><span>Chat Support</span></p>
            </div>
            <div className='mt-6 md:mt-8 h-16 md:h-8 w-auto flex flex-row justify-center md:justify-start text-white space-x-3 md:space-x-5 ml-4 md:ml-8'>
                <p className="rounded-full w-6  md:w-8 md:h-8 flex justify-center items-center"><FaTwitter /></p>
                <p className="rounded-full w-6 h-6 md:w-8 md:h-8 flex  justify-center items-center  bg-white text-black p-0"><FaInstagram /></p>
                <p className="rounded-full w-6  md:w-8 md:h-8 flex justify-center items-center"><FaDiscord /></p>
            </div>
            <div className='absolute right-8 md:right-16 bottom-14 opacity-15 rounded-full bg-white w-14 md:w-20 h-14 md:h-20'></div>
            <div className='absolute right-[-20px] md:right-[-40px] bottom-[-20px] md:bottom-[-40px] opacity-15 rounded-full bg-white w-24 md:w-40 h-24 md:h-40'></div>
        </div>
            <form className="bg-transparent p-4 md:p-8 mb-20 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 focus:text-gray-400" htmlFor="first-name">
                            First Name
                        </label>
                        <input
                            className="appearance-none block w-full text-gray-700 border-0 border-b-2 border-gray-600 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                            id="first-name"
                            type="text"
                            placeholder=""
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last-name">
                            Last Name
                        </label>
                        <input
                            className="appearance-none block w-full text-gray-700 border-0 border-b-2 border-gray-600 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                            id="last-name"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none block w-full text-gray-700 border-0 border-b-2 border-gray-600 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                            id="email"
                            type="email"
                            placeholder=""
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone-number">
                            Phone Number
                        </label>
                        <input
                            className="appearance-none block w-full text-gray-700 border-0 border-b-2 border-gray-600 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                            id="phone-number"
                            type="tel"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block uppercase tracking-wide  text-gray-700 md:text-xs text-base font-bold mb-2" htmlFor="subject">
                        Select Subject?
                    </label>
                    <div className="flex flex-wrap">
                        <label className="inline-flex items-center mb-2 mr-4 md:mb-0">
                            <input
                                type="radio"
                                className="form-radio text-black"
                                name="subject"
                                value="general-inquiry2"
                                checked
                            />
                            <span className="ml-2">General Inquiry</span>
                        </label>
                        <label className="inline-flex items-center mb-2 mr-4 md:mb-0">
                            <input type="radio" className="form-radio" name="subject" value="general-inquiry1" />
                            <span className="ml-2">General Inquiry</span>
                        </label>
                        <label className="inline-flex items-center mb-2 mr-4 md:mb-0">
                            <input type="radio" className="form-radio" name="subject" value="general-inquiry3" />
                            <span className="ml-2">General Inquiry</span>
                        </label>
                        <label className="inline-flex items-center mb-2">
                            <input type="radio" className="form-radio" name="subject" value="general-inquiry4" />
                            <span className="ml-2">General Inquiry</span>
                        </label>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="appearance-none block w-full text-gray-700 border-0 border-b-2 border-gray-600 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                        id="message"
                        placeholder=""
                    ></textarea>
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-black md:w-auto w-full text-sm text-white font-semibold py-4 px-8 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Send Message
                    </button>
                </div>
            </form>
            <div className='absolute w-52 bottom-[-12] right-28 hidden md:block'><img src={air} alt="" /></div>
        </div>
    );
};

export default MainBodyForm;
