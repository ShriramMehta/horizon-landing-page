import React from "react";

const ButtonLoader = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <svg
          className="animate-spin h-5 w-5 mr-3 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 6.627 5.373 12 12 12v-4c-4.418 0-8-3.582-8-8h-4zm10-9.29A7.962 7.962 0 0120 12h4c0-6.627-5.373-12-12-12v4c4.418 0 8 3.582 8 8h4zm-2 9.29a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4c0 4.418-3.582 8-8 8v-4z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ButtonLoader;
