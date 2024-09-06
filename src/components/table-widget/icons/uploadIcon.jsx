import React from 'react'

const UploadIcon = ({ fill = 'none', width = '16px', height = '16px', styleClass = "" }) => {
  return (
    <svg
      className={`transition duration-75 ${styleClass}`}
      width={width}
      height={height}
      fill={fill}
      viewBox='0 0 16 16'
    >
      <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M11.3333 5.33333L8 2M8 2L4.66667 5.33333M8 2V10" stroke="#7F8594" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default UploadIcon