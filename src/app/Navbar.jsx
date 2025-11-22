'use client'

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import HERO_LOGO from "@/assets/image/logo_black.png";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/" },
    { label: "Admissions", href: "/" },
    { label: "Programs", href: "/" },
    { label: "Contact", href: "/" },
  ];

  return (
    <header
      className={`
        w-full fixed top-0 left-0 z-50 
        transition-all duration-500 ease-in-out
        ${scrolled 
          ? "bg-white shadow-lg backdrop-blur-md py-2" 
          : "bg-transparent shadow-none backdrop-blur-0 py-4"
        }
      `}
    >
      {/* Navbar container */}
      <div
        className={`
          flex gap-4 items-center justify-between max-w-7xl mx-auto px-4
          transition-all duration-500 ease-in-out
          ${scrolled ? "md:flex-row" : "md:flex-col"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3 transition-all duration-300">
          <Image 
            className={`transition-all duration-500 
              ${scrolled ? "w-[70px]" : "w-[90px] md:w-[120px]"}
            `}
            src={HERO_LOGO} 
            alt="Logo" 
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-lg transition-all duration-500">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="text-xl font-primary transition-all duration-300 text-primary hover:text-primary-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className={`md:hidden text-3xl transition duration-300 
            ${scrolled ? "text-black" : "text-white"}
          `}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`
          md:hidden w-full bg-white shadow-lg 
          transition-all duration-500 ease-in-out overflow-hidden
          ${open ? "max-h-96 mt-3" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col p-4 space-y-4 text-lg">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className="block py-2 px-2 rounded hover:bg-gray-100 transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
