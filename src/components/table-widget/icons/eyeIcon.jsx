import React from 'react'

const EyeIcon = ({ fill = 'none', width = '16px', height = '16px', styleClass = "" }) => {
  return (
    <svg
      className={`transition duration-75 ${styleClass}`}
      width={width}
      height={height}
      fill={fill}
      viewBox='0 0 16 16'
    >
      <path d="M1.3737 8.23029C1.31814 8.08061 1.31814 7.91596 1.3737 7.76629C1.91483 6.45419 2.83338 5.33231 4.01288 4.54289C5.19239 3.75346 6.57973 3.33203 7.99904 3.33203C9.41834 3.33203 10.8057 3.75346 11.9852 4.54289C13.1647 5.33231 14.0832 6.45419 14.6244 7.76629C14.6799 7.91596 14.6799 8.08061 14.6244 8.23029C14.0832 9.54238 13.1647 10.6643 11.9852 11.4537C10.8057 12.2431 9.41834 12.6645 7.99904 12.6645C6.57973 12.6645 5.19239 12.2431 4.01288 11.4537C2.83338 10.6643 1.91483 9.54238 1.3737 8.23029Z" stroke="#7F8594" stroke="#7F8594" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.99805 9.99805C9.10262 9.99805 9.99805 9.10262 9.99805 7.99805C9.99805 6.89348 9.10262 5.99805 7.99805 5.99805C6.89348 5.99805 5.99805 6.89348 5.99805 7.99805C5.99805 9.10262 6.89348 9.99805 7.99805 9.99805Z" stroke="#7F8594" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default EyeIcon