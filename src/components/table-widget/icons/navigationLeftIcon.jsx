import React from 'react'

const NavigationLeftIcon = ({ fill = 'none', width = '24px', height = '24px', styleClass = "" }) => {
  return (
    <svg
      className={`transition duration-75 ${styleClass}`}
      width={width}
      height={height}
      fill={fill}
      viewBox='0 0 24 24'
    >
      <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default NavigationLeftIcon