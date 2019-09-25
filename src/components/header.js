import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import logo from "../favicon_compressed.png";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-teal-600 shadow-lg">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-white max-w-3/4">
          <img className="w-16 mr-2" src={logo} alt="Madeleine Mary Walker Logo"/>
          <span className="font-bold text-2xl tracking-tight">{siteTitle} <span className="text-xs hidden lg:inline">Reg Charity Commission No. 1062657</span></span>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="text-sm">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white font-semibold select-none"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white font-semibold select-none"
            >
              About Madeleine
            </Link>

            <Link
              to="/apply"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-white font-semibold md:border md:border-white md:hover:border-transparent md:hover:text-teal-600 md:hover:bg-white md:mt-4 lg:mt-0 md:rounded md:px-4 md:py-2 select-none"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
