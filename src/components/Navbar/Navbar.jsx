import React from "react";
import Logo from "../../assets/website/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { useNavigate } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = ({ handleOrderPopup, orderCount }) => {
  const navigate = useNavigate();

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              ISLAMIC SHELF
            </a>
          </div>

          {/* Navbar Links and Actions */}
          <div className="flex justify-between items-center gap-4">
            {/* Dark Mode Toggle */}
            <DarkMode />

            {/* Navbar Menu */}
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-4 px-4 hover:text-primary duration-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Sign Up Button */}
            <a
              href="/signup"
              className="hidden sm:flex bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full items-center gap-3"
            >
              Sign Up
            </a>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="relative bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
            >
              Order
              <div className="relative">
                <FaCartShopping className="text-xl text-white drop-shadow-sm" />
                {orderCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {orderCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
