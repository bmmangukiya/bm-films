import React from 'react';

function NavigationArrow({ type, className, style, onClick }) {
  return (
    <div className={className + ' !mr-10 !z-50'} onClick={onClick}>
      <div className="p-2 w-fit h-fit rounded-full drop-shadow-lg shadow-black hover:bg-blue-gray-300 fill-black bg-gray-200" style={style}>
        {type === 'next' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256">
            <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256">
            <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
          </svg>
        )}
      </div>
    </div>
  );
}

export default NavigationArrow;
