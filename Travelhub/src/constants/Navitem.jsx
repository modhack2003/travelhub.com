import React from 'react';

function NavItem({ text }) {
  return (
    <a href={`#${text.toLowerCase()}`} className="py-2 px-4 md:text-sm text-xl md:py-0 md:px-0 md:mx-2 hover:text-gray-700 transition-colors duration-200">
      {text}
    </a>
  );
}

export default NavItem;
