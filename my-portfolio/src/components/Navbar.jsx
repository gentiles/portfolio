import { useState } from "react";
import links from "../data";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const link = links.map((item) => {
    const { id, href, text } = item;
    return (
      <a
        key={id}
        href={href}
        className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
        onClick={() => setIsOpen(false)}
      >
        {text}
      </a>
    );
  });

  return (
    <nav className="bg-emerald-100">
      <div className="align-element flex justify-between items-center py-4">
        <h2 className="text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>
        </h2>

        {/* Burger Button */}
        <button
          className="md:hidden text-2xl text-slate-500 hover:text-black duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-x-3">{link}</div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center gap-y-8 pt-20">{link}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
