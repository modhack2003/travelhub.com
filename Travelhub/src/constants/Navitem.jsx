import React from 'react';

function NavItem({ text }) {
  return (
    <a href={`#${text.toLowerCase()}`} className="self-stretch my-auto ">
      {text}
    </a>
  );
}

export default NavItem;