import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <Link to="/login" className="transition hover:text-f-green">
        Login
      </Link>
      <Link
        to="/register"
        className="transition border rounded border-f-green hover:text-white hover:bg-f-green px-1"
      >
        Register
      </Link>
    </>
  );
};

export default Links;
