import React, { useState } from 'react';

export const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      {/* Pass toggle function to children */}
      {React.Children.map(children, child => {
        if (child.type === DropdownButton) {
          return React.cloneElement(child, { toggleDropdown });
        }
        if (child.type === DropdownMenu) {
          return React.cloneElement(child, { isOpen });
        }
        return child;
      })}
    </div>
  );
};


export const DropdownItem = ({ children, styleClass = '', ...props }) => {
  return (
    <button
      {...props}
      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none ${styleClass}`}
    >
      {children}
    </button>
  );
};

export const DropdownMenu = ({ isOpen, children, anchor }) => {
  return (
    isOpen && (
      <div
        className={`absolute z-10 -top-4 right-full w-48 bg-white shadow-lg rounded-lg py-2`}
      >
        {children}
      </div>
    )
  );
};

export const DropdownButton = ({ children, toggleDropdown, ...props }) => {
  return (
    <button
      {...props}
      className="rounded focus:outline-none"
      onClick={toggleDropdown}
    >
      {children}
    </button>
  );
};

