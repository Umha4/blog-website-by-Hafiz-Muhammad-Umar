"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { ModeToggle } from './ModToggle';
import { FiMenu } from "react-icons/fi"; // Hamburger Icon

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main>
      <nav className='max-w-screen-2xl mx-auto overflow-x-hidden border border-slate-200 flex justify-between px-6 h-[70px] items-center'>
        {/* Logo */}
        <Link href="/" className='text-2xl font-medium'>
          HealthLinks
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-black dark:text-white font-medium hover:text-orange-400 dark:hover:text-orange-400">
            Home
          </Link>
          <Link href="/about" className="text-black dark:text-white font-medium hover:text-orange-400 dark:hover:text-orange-400">
            About Us
          </Link>
          <Link href="/contact" className="text-black dark:text-white font-medium hover:text-orange-400 dark:hover:text-orange-400">
            Contact Us
          </Link>
          <Link href="/tblog" className="text-black dark:text-white font-medium hover:text-orange-400 dark:hover:text-orange-400">
            Blogs
          </Link>
        </div>

        {/* Mode Toggle */}
        <ModeToggle />

        {/* Mobile Hamburger Icon */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl text-black dark:text-white"
        >
          <FiMenu />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t-2 border-slate-200`}>
        <div className="flex flex-col gap-5 p-5">
          <Link href="/" className="text-black dark:text-white font-medium hover:text-orange-400 dark:hover:text-orange-400">
            Home
          </Link>
          <Link href="/about" className="text-black dark:text-white font-medium hover:text-orange-400 dark:hover:text-orange-400">
            About Us
          </Link>
          <Link href="/contact" className="text-black dark:text-white font-medium hover:text-orange-400 dark:hover:text-orange-400">
            Contact Us
          </Link>
          <Link href="/tblog" className="text-black dark:text-white font-medium hover:text-orange-400 dark:hover:text-orange-400">
            Blogs
          </Link>
        </div>
      </div>
    </main>
  );
}
