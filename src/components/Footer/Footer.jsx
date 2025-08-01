import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/website/logo.png";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact", // You can later make this component
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[30px]" />
              ISLAMIC DIGITAL SHELF
            </h1>
            <p>Books Can Speak And Have Power To Change Your Whole Personality.</p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Muhammad Junaid</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+92 3355099641</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#"><FaInstagram className="text-3xl" /></a>
              <a href="#"><FaFacebook className="text-3xl" /></a>
              <a href="#"><FaLinkedin className="text-3xl" /></a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  {i === 2 ? "Location" : i === 1 ? "Links" : "Important Links"}
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li
                      key={link.title + index}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                    >
                      <span>&#11162;</span>
                      <Link to={link.link}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center py-10 border-t-2 border-gray-300/50">
          © 2024 All rights reserved || Made By Group Junaid and Sahadat.
        </div>
      </section>
    </div>
  );
};

export default Footer;
