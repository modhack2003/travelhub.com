import React from 'react';
import team from '../../assets/image copy 9.png';
import sec from '../../assets/image copy 13.png';
import learning from '../../assets/image copy 11.png';
import upgrade from '../../assets/image copy 12.png';

const benefitsData = [
  {
    title: "Team work",
    description: "At travel hub we have the best team which will support you grow towards your bright future.",
    icon: team,
    bg: "bg-[#E7F2FF]"
  },
  {
    title: "Secured Future",
    description: "Worried about your future, we launch opportunities every month and with us you don't need to worry about future.",
    icon: sec,
    bg: "bg-[#F1F7E8]"
  },
  {
    title: "Learning Opportunity",
    description: "You can explore and get to know about different locations and things around the world through our website. It will give you a chance to witness an unlimited source of knowledge.",
    icon: learning,
    bg: "bg-[#EFF2F5]"
  },
  {
    title: "Upgrade Skills",
    description: "Upgrade your skills timely while working with us. We have a team of skilled professionals which will guide you and help you throughout your journey.",
    icon: upgrade,
    bg: "bg-[#FFEEED]"
  },
];

const Benefits = () => {
  return (
    <div className="py-16 bg-white font-Poppins">
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-40 py-12 px-4 lg:px-20">
        <div className='w-full lg:w-[200%] mb-8 lg:mb-0'>
          <h2 className="text-xl font-semibold text-gray-600 mb-2">BENEFITS</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Why you Should Join Our Awesome Team</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex flex-1 flex-col md:flex-row space-x-4">
              <div className={`flex md:p-4 md:h-[12vh] md:w-52 w-12 h-16 justify-center items-center ${benefit.bg} mb-4 rounded-sm ml-0 md:ml-4`}>
                <img src={benefit.icon} alt={benefit.title} className="w-12 h-12 md:p-0 p-2 " />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
