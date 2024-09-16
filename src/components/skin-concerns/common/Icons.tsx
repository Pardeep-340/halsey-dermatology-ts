type ICONS_PROPS = {
  icon?: any;
  className?: String;
};
const Icons = ({ icon, className }: ICONS_PROPS) => {
  const ICONS_LIST: any = {
    rightArrowIcon: (
      <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={`${className}`} d="M5.62311 7.19137L1.15314 11.4503L1.91238 12.1736L7.86695 6.50026L1.9125 0.826988L1.15301 1.55113L5.62311 5.81015L6.12363 5.33326L6.12363 6.50026L6.12363 6.50126L6.12363 7.66826L5.62311 7.19137Z" fill="#001008" stroke="#001008" />
      </svg>
    ),
    whiteArrow: (
      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="group-hover:stroke-laurel common-transition" d="M6.30817 6.20874L1.62504 1.2935L0.780457 2.17995L6.99933 8.70704L13.2181 2.18007L12.3727 1.29336L7.6894 6.20874L8.16633 6.70931L6.99933 6.70931L6.99824 6.70931L5.83124 6.70931L6.30817 6.20874Z" fill="#6E9277" stroke="white" />
      </svg>
    )
  };

  return icon && ICONS_LIST[icon];
};

export default Icons;
