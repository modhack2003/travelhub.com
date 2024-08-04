import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const jobData = [
  { title: "Wordpress Developer", experience: "2 Years", deadline: "2021-05-08" },
  { title: "Javascript Developer", experience: "1 Year", deadline: "2021-05-08" },
  { title: "Apps Developer", experience: "3 Years", deadline: "2021-05-08" },
  { title: "iOS Developer ", experience: "2 Years", deadline: "2021-05-08" },
  { title: "Node JS Developer", experience: "3 Years", deadline: "2021-05-08" }
];

const JobListings = () => {
  return (
    <div className=" mx-28 py-10 font-Poppins">
      <h1 className="text-center text-xl font-semibold mb-10">Come Join Us</h1>
      <h2 className="text-center text-3xl font-bold mb-8 mx-[80vh]  h-16">Career Openings</h2>
      <div className="flex">
        <div className="w-1/4">
          <ul className="text-lg font-medium">
            <li className="mb-4 ">HT & Admin</li>
            <li className="mb-4 text-red-500">Engineering (20)</li>
            <li className="mb-4">Support</li>
            <li className="mb-4">Design</li>
            <li className="mb-4">Digital Marketing</li>
          </ul>
        </div>
        <div className="w-3/4">
          {jobData.map((job, index) => (
            <div key={index} className="grid grid-cols-4 items-center bg-white p-4 mb-4 shadow rounded relative gap-5">
              <div className='col-span-1'>
                <h3 className="text-xl font-semibold">
                  {job.title}
                </h3>
              </div>
              <div className="col-span-1 text-center">
                <span className="block text-gray-400">Experience</span>
                <p className="text-black text-xl font-bold">{job.experience}</p>
              </div>
              <div className="col-span- text-center">
                <span className="block text-gray-400">Deadline</span>
                <p className="text-black text-xl font-bold">{job.deadline}</p>
              </div>
              <div className="col-span-1 text-center">
                <button className="text-gray-400 hover:underline"><FaArrowRightLong /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default JobListings;
