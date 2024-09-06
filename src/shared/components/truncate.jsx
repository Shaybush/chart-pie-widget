import React from 'react';

const Truncate = ({ children, width }) => {

  return (
    <div className="relative group" style={{ maxWidth: width }}>
      {/* Truncated Text */}
      <div
        className="truncate overflow-hidden whitespace-nowrap"
        style={{ maxWidth: width }}
      >
        {children}
      </div>

      {/* TODO - add tooltip - if needed Only show if text is truncated */}
      {/* <div className="absolute -top-8 left-0 bg-white text-gray-800 border border-gray-300 text-xs px-2 py-1 rounded z-50 w-max max-w-xs">
        {children}
      </div> */}
    </div>
  );
};

export default Truncate;
