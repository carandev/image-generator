import * as React from "react"

const LoadingIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-aperture"
    width={40}
    height={40}
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M3.6 15h10.55M6.551 4.938l3.26 10.034M17.032 4.636l-8.535 6.201M20.559 14.51l-8.535-6.201M12.257 20.916l3.261-10.034" />
  </svg>
)

export default LoadingIcon
