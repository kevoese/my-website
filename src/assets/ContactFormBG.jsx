import React from 'react';

const ContactFormBG = () => (
  <svg
    width="563"
    height="448"
    viewBox="0 0 563 448"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 26C34.4772 26 30 30.4771 30 36V414C30 414 54.0352 383.13 100.022 383.13C122.818 383.13 134.186 390.628 145.717 398.234C157.582 406.06 169.619 414 194.455 414C211.046 414 221.721 406.939 232.861 399.57C245.012 391.532 257.715 383.13 279.252 383.13C303.867 383.13 316.479 390.977 328.987 398.758C341.287 406.411 353.485 414 376.897 414C394.733 414 404.156 406.675 413.822 399.162C424 391.25 434.448 383.13 455.27 383.13C500.238 383.13 533 414 533 414V66C533 43.9086 515.091 26 493 26H40Z"
        fill="url(#paint0_linear)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="563"
        height="448"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="15" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="481"
        y1="34.5"
        x2="84"
        y2="345"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.197917" stopColor="#0043A9" />
        <stop offset="0.484375" stopColor="#0472D8" />
        <stop offset="0.807292" stopColor="#003F9D" />
      </linearGradient>
    </defs>
  </svg>
);

export default ContactFormBG;
