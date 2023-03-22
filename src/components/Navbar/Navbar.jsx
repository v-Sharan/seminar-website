import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo, NbaLogo, NaacLogo, Rmk27Logo } from "../../assests";

const Navbar = ({ children }) => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="bg-primary flex gap-3 justify-center">
            <figure className="w-12">
              <img src={NaacLogo} alt="logo" />
            </figure>
            <div className="pb-3 text-2xl font-semibold text-gray-200 uppercase">
              R.M.K College of Engineering and Technology
              <span className="text-[10px] flex leading-relaxed">
                <div className="flex flex-col">
                  <div className="flex justify-center">
                    (AN AUTONOMOUS INSTITUTION)
                  </div>
                  <div className="flex justify-center">
                    APPROVED BY AICTE, NEW DELHI AFFILIATED TO ANNA UNIVERSITY,
                    CHENNAI.
                  </div>
                  <div className="flex justify-center">
                    ALL ELIGIBLE PROGRAMS ACCREDITED BY NBA INSTITUTION
                    ACCREDITED BY NAAC,
                  </div>
                  <div className="flex justify-center">
                    R.S.M NAGAR, PUDUVOYAL, GUMMIDIPOONDI TALUK, TIRUVALLUR
                    DISTRICT,601206.
                  </div>
                </div>
              </span>
            </div>
            <figure className="w-10">
              <div className="flex gap-3">
                <img src={NbaLogo} alt="nba-logo" />
                <img src={Rmk27Logo} alt="rmk-25-logo" />
              </div>
            </figure>
          </div>
          <div className="w-full navbar border-b bg-primary shadow-lg flex lg:justify-center">
            <div className="flex-none text-white md:block lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                {!nav && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex justify-end"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                )}
              </label>
            </div>
            <div className="hidden lg:block">
              <ul className="flex flex-row gap-3 text-white">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive && "btn-success rounded-lg"
                    } hover:btn-success hover:rounded-lg`
                  }
                >
                  <li className="btn btn-ghost">Home</li>
                </NavLink>
                <NavLink
                  to="/committe"
                  className={({ isActive }) =>
                    `${
                      isActive && "btn-success rounded-lg"
                    } hover:btn-success hover:rounded-lg`
                  }
                >
                  <li className="btn btn-ghost">Committee</li>
                </NavLink>
                <NavLink
                  to="/speakers"
                  className={({ isActive }) =>
                    `${
                      isActive && "btn-success rounded-lg"
                    } hover:btn-success hover:rounded-lg`
                  }
                >
                  <li className="btn btn-ghost">Resource Persons</li>
                </NavLink>
                <NavLink
                  to="/register-details"
                  className={({ isActive }) =>
                    `${
                      isActive && "btn-success rounded-lg"
                    } hover:btn-success hover:rounded-lg`
                  }
                >
                  <li className="btn btn-ghost">Registration Details</li>
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${
                      isActive && "btn-success rounded-lg"
                    } hover:btn-success hover:rounded-lg`
                  }
                >
                  <li className="btn btn-ghost">About</li>
                </NavLink>
              </ul>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive && "btn-primary rounded-lg"
                } hover:btn-primary hover:rounded-lg p-3`
              }
            >
              <li> Home</li>
            </NavLink>
            <NavLink
              to="/committe"
              className={({ isActive }) =>
                `${
                  isActive && "btn-primary rounded-lg"
                } hover:btn-primary hover:rounded-lg p-3`
              }
            >
              <li>Committee</li>
            </NavLink>
            <NavLink
              to="/speakers"
              className={({ isActive }) =>
                `${
                  isActive && "btn-primary rounded-lg"
                } hover:btn-primary hover:rounded-lg p-3`
              }
            >
              <li>Resource Persons</li>
            </NavLink>
            <NavLink
              to="/register-details"
              className={({ isActive }) =>
                `${
                  isActive && "btn-primary rounded-lg"
                } hover:btn-primary hover:rounded-lg p-3`
              }
            >
              <li>Registration Details</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive && "btn-primary rounded-lg"
                } hover:btn-primary hover:rounded-lg p-3`
              }
            >
              <li>About</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
