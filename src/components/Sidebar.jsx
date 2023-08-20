import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHashtag,
  HiOutlineMenu,
  HiOutlinePhotograph,
} from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { FaBan } from "react-icons/fa";
import { FaRegUser, FaRegCalendar } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const links = [
  { name: "Admin", to: "/admin", icon: HiOutlinePhotograph },
  { name: "Bookings", to: "/bookings", icon: FaRegCalendar },
  { name: "Post", to: "/posts", icon: HiOutlineHashtag },
  { name: "Log out", to: "/auth", icon: FaRegUser },
  { name: "complaints", to: "/complaints", icon: FaBan },
];

const NavLinks = ({ handleClick }) => {
  return (
    <div className="mt-10">
      {links.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className={`text-gray-400
           flex flex-row justify-start items-center my-8 text-sm font-medium hover:text-indigo-600`}
        >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624] h-[100vh] fixed">
        <Link to="/">
          <h1 className="text-gray-400 text-xl ml-[1.5rem] cursor-pointer">
            Brightnees
          </h1>
          <div className="bg-gray-400 w-[92px] h-[2px] ml-[1.5rem] rounded-[1px] mt-[0.5rem]"></div>
          <div className="bg-gray-400 w-[12px] h-[12px] absolute rounded-[50%] top-[70px] left-[5rem]"></div>
        </Link>
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 text-indigo-600"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="w-6 h-6 mr-2 text-indigo-600"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        {/* <img src={logo} alt="logo" className="w-full h-14 object-contain" /> */}
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
