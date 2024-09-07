import React from 'react'

const ArrowRightIcon = ({ fill = 'none', width = '16px', height = '16px', styleClass = "" }) => {
  return (
    <svg
      className={`transition duration-75 ${styleClass}`}
      width={width}
      height={height}
      fill={fill}
      viewBox='0 0 16 16'
    >
      <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ArrowRightIcon