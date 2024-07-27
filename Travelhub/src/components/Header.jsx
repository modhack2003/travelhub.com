import React from 'react';
import Button from './Button';
import image from '../assets/image copy 7.png'
import { SeeMoreButton } from '../constants/seemore';

const Header = () => {
  return (
    <header className=" ">
      <SeeMoreButton/>
      <img src={image} className='object-contain' />      
      
    </header>
  );
};

export default Header;