const Logo = ({ className = '', ...props }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="var(--primary)"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect width="100%" height="100%" rx="16" fill="var(--secondary)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m7.34165,7.18668l8.70112,0c6.26617,0 10.06941,3.94085 10.06941,9.98778c0,6.403 -4.15931,9.57729 -10.06941,9.57729l-8.70112,0l0.02721,-2.57255l0,-14.41997l-0.02721,-2.57255zm6.67666,15.07691l1.17627,0c2.24369,0 3.77603,-1.36752 3.77603,-5.25317c0,-3.85844 -1.50513,-5.30836 -3.77603,-5.30836l-1.17627,0l0,10.56153z"
      fill="var(--primary)"
    />
  </svg>
)

export default Logo
