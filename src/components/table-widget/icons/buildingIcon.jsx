import React from 'react'

const BuildingIcon = ({ fill = 'none', width = '16px', height = '16px', styleClass = "" }) => {
  return (
    <svg
      className={`transition duration-75 ${styleClass}`}
      width={width}
      height={height}
      fill={fill}
      viewBox='0 0 16 16'
    >
      <path d="M12.0013 1.33203H4.0013C3.26492 1.33203 2.66797 1.92898 2.66797 2.66536V13.332C2.66797 14.0684 3.26492 14.6654 4.0013 14.6654H12.0013C12.7377 14.6654 13.3346 14.0684 13.3346 13.332V2.66536C13.3346 1.92898 12.7377 1.33203 12.0013 1.33203Z" stroke="#7F8594" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.00065 14.6647V11.998H10.0007V14.6647M5.33398 3.99805H5.34065M10.6673 3.99805H10.674M8.00065 3.99805H8.00732M8.00065 6.66471H8.00732M8.00065 9.33138H8.00732M10.6673 6.66471H10.674M10.6673 9.33138H10.674M5.33398 6.66471H5.34065M5.33398 9.33138H5.34065" stroke="#7F8594" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default BuildingIcon