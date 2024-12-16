import { useState } from "react";
import logo from "../assets/Logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center px-[32px] py-[16px] md:px-[96px] md:py-[32px] relative">
      {/* Logo */}
      <a href="#">
        <img src={logo} alt="logo" />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex text-xl font-semibold space-x-[48px]">
          <a href="#about-us">
            <li>About us</li>
          </a>
          <a href="#Doctors">
            <li>Doctors</li>
          </a>
          <a href="#Services">
            <li>Services</li>
          </a>
          <a href="#">
            <li className="uppercase">faq</li>
          </a>
        </ul>
      </nav>

      {/* Button */}
      <div className="hidden md:block">
        <button className="text-white bg-[#48CFCB] px-[18px] py-[12px] rounded-[8px] font-bold">
          Book An Appointment
        </button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-3xl"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-[80%] h-full bg-white shadow-lg z-50 p-[32px] flex flex-col">
          <button
            className="self-end text-3xl mb-[24px]"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            ✖
          </button>
          <ul className="flex flex-col space-y-[24px] text-lg font-medium">
            <a href="#about-us" onClick={toggleMenu}>
              <li>About us</li>
            </a>
            <a href="#Doctors" onClick={toggleMenu}>
              <li>Doctors</li>
            </a>
            <a href="#Services" onClick={toggleMenu}>
              <li>Services</li>
            </a>
            <a href="#" onClick={toggleMenu}>
              <li className="uppercase">faq</li>
            </a>
          </ul>
          <button className="text-white bg-[#48CFCB] px-[18px] py-[12px] rounded-[8px] font-bold mt-auto">
            Book An Appointment
          </button>
        </div>
      )}

      {/* Backdrop when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
