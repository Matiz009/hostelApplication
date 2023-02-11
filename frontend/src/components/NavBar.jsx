import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      {" "}
      <div className="w-100 bg-dark">
        {" "}
        <Link
          to="/hostelApplicants"
          className="ms-5 me-5 text-decoration-none text-white"
        >
          {" "}
          Apply{" "}
        </Link>{" "}
        <Link
          to="/viewApplicants"
          className="ms-5 me-5 text-decoration-none text-white"
        >
          {" "}
          ViewApplicants{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default NavBar;
