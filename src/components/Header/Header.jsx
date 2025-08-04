import React from 'react';
import { FaBuildingNgo } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

function Header() {
  const navItems = [
    { name: "Home", route: "/" },
    { name: "Admin", route: "/admin" },
    { name: "About", route: "/about" },
  ];

  return (
    <div className="w-full h-[60px] bg-cyan-600 text-white flex items-center justify-between px-4 shadow-md">
      {/* Logo*/}
      <div className="flex items-center gap-2">
        <FaBuildingNgo size={24} />
        <p className="lg:text-lg md:text-lg font-semibold text-sm ">Basti Ki Pathshala</p>
      </div>

      {/* Navigation Items */}
      <div className="flex gap-6">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.route}
            className={({ isActive }) =>
              isActive
                ? "font-bold underline"
                : "opacity-80 hover:opacity-100"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Header;
