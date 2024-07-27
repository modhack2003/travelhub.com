import React from 'react';

const Button = ({ text, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`self-stretch p-4 font-medium bg-black rounded-lg text-neutral-50 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;