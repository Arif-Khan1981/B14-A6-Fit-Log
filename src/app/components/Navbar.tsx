import React from 'react';
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  return (
  <div className='bg-black px-4'>
    <div className="navbar sticky top-0 z-50 text-white md:px-8 container mx-auto">

      {/* LEFT: Logo + Mobile Menu */}
      <div className="navbar-start">

        {/* Mobile menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-10 mt-3 w-44 rounded-box border border-gray-800 bg-black p-2 text-white shadow-lg"
          >
            <li>
              <Link href="/">WORKOUT</Link>
            </li>

            <li>
              <Link href="/my-plan">MY PLAN</Link>
            </li>
          </ul>
        </div>


        {/* Logo */}
        
      
        <Link
          href="/"
          className="flex gap-2 ml-1 text-xl font-black tracking-wider md:text-2xl"
        >
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={30}
            height={30}
            priority
          />
          FITLOG
        </Link>
      </div>

      {/* CENTER: Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 px-1">

          <li>
            <Link
              href="/"
              className="font-semibold text-[#ccff00]"
            >
              WORKOUTS
            </Link>
          </li>

          <li>
            <Link
              href="/my-plan"
              className="font-semibold text-gray-400 transition hover:text-white"
            >
              MY PLAN
            </Link>
          </li>

        </ul>
      </div>

      {/* RIGHT: Plan + Saved */}
      <div className="navbar-end gap-2">

        {/* Plan */}
        <Link
          href="/my-plan"
          className="rounded-full bg-[#ccff00] px-3 py-2 text-xs font-bold text-black transition hover:bg-[#718c06] md:px-4"
        >
          PLAN <span>0</span>
        </Link>

        {/* Saved */}
        <Link
          href="/my-plan"
          className="rounded-full border border-gray-500 px-3 py-2 text-xs font-bold text-white transition hover:border-white md:px-4"
        >
          SAVED <span>0</span>
        </Link>

      </div>
    </div>
  </div>
  );
};

export default Navbar;