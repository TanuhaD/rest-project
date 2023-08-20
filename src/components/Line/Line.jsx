const Line = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={2}
    height={40}
    fill="none"
    {...props}
  >
    <path stroke="#EBEBEB" strokeWidth={2} d="M1 0v40" />
  </svg>
);
export default Line;
