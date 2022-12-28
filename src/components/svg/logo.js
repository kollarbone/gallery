import * as React from "react";

const logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    viewBox="0 0 68 68"
    fill="none"
    {...props}
  >
    <path
      d="M34 66c17.673 0 32-14.327 32-32C66 16.327 51.673 2 34 2 16.327 2 2 16.327 2 34c0 17.673 14.327 32 32 32Z"
      stroke="#4C4C4C"
      strokeWidth={2.5}
    />
    <path
      d="M18.977 35.326h-1.622M22.3 27.822H13V41.71M51.164 32.334v9.376M56 27.822h-9.3M31.527 41.96 26.151 27M43.05 27l-5.376 14.96-3.163-8.424"
      stroke="#4C4C4C"
      strokeWidth={2.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default logo;
