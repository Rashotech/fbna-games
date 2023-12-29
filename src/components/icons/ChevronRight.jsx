const ChevronRight = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

{
  /* <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="ic:round-navigate-next">
        <path
          id="Vector"
          d="M11.6375 8.38753C11.5216 8.50317 11.4297 8.64053 11.367 8.79175C11.3043 8.94296 11.272 9.10507 11.272 9.26878C11.272 9.43249 11.3043 9.59459 11.367 9.74581C11.4297 9.89702 11.5216 10.0344 11.6375 10.15L16.4875 15L11.6375 19.85C11.4038 20.0837 11.2725 20.4007 11.2725 20.7313C11.2725 21.0618 11.4038 21.3788 11.6375 21.6125C11.8712 21.8462 12.1882 21.9776 12.5188 21.9776C12.8493 21.9776 13.1663 21.8462 13.4 21.6125L19.1375 15.875C19.2534 15.7594 19.3453 15.622 19.4081 15.4708C19.4708 15.3196 19.5031 15.1575 19.5031 14.9938C19.5031 14.8301 19.4708 14.668 19.4081 14.5167C19.3453 14.3655 19.2534 14.2282 19.1375 14.1125L13.4 8.37503C12.925 7.90003 12.125 7.90003 11.6375 8.38753Z"
          fill="#022E64"
        />
      </g>
    </svg> */
}

export default ChevronRight;
