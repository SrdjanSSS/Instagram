import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Guard = ({ children, shouldRedirect, redirectRoute }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect) {
      navigate(redirectRoute);
    }
  }, [shouldRedirect]);
  return <>{children} </>;
};

export default Guard;
