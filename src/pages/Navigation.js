import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ location }) => {
  const [isHome, setHome] = useState(true);
  const reg = /^\/$/;

  useEffect(
    () => {
      const isHome = reg.test(location.pathname);
      setHome(isHome);
    },
    [location]
  );

  return isHome ? (
    <></>
  ) : (
    <Link to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 100 100"
      >
        <path d="M5,50 L95,50 M3,50 L19,34 M3,50 L19,66" />
      </svg>
    </Link>
  );
};


export default Navigation;
