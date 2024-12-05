"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.png";
import { UserButton, useAuth } from "@clerk/nextjs";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { userId } = useAuth();
  const currentPath = usePathname();

  const handleClick = () => {
    setOpen(!open);
  };

  const isActive = (path: string) =>
    currentPath === path ? "text-orange-600" : "text-black";

  return (
    <header
      className={`h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-between ${
        open ? "bg-slate-600" : "bg-slate-400"
      }`}
    >
      {/* Logo */}
      <Link href={"/"} onClick={() => setOpen(false)}>
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          className="bg-white rounded-full bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 shadow-md hover:scale-105 active:scale-95 transition-all"
        />
      </Link>

      {/* Desktop menu */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-5 font-semibold text-xl">
          <li className={isActive("/")}>
            <Link href="/" className="hover:text-orange-600">Home</Link>
          </li>
          <li className={isActive("/services")}>
            <Link href="/services" className="hover:text-orange-600">Service</Link>
          </li>
          <li className={isActive("/about")}>
            <Link href="/about" className="hover:text-orange-600">About</Link>
          </li>
          <li className={isActive("/contact")}>
            <Link href="/contact" className="hover:text-orange-600">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Sign in and sign out buttons */}
      <div className="md:flex text-xl items-center list-none gap-4 font-semibold hidden">
        {!userId ? (
          <>
            <Link href="/sign-in" className="hover:text-orange-600">
              <li>Sign In</li>
            </Link>
            <Link href="/sign-up" className="hover:text-orange-600">
              <li>Sign Up</li>
            </Link>
          </>
        ) : (
          <>
            <Link href="/profile">
              <li className="hover:text-orange-600">Profile</li>
            </Link>
            <li className="flex items-center">
              <UserButton />
            </li>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-end w-full gap-4">
        <div className="flex items-center list-none gap-4 font-semibold">
          {!userId ? (
            <>
              <Link href="/sign-in" className="hover:text-orange-600">
                <li>Sign In</li>
              </Link>
              <Link href="/sign-up" className="hover:text-orange-600">
                <li>Sign Up</li>
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile">
                <li className="hover:text-orange-600">Profile</li>
              </Link>
              <li className="flex items-center">
                <UserButton />
              </li>
            </>
          )}
        </div>
        <button onClick={handleClick}>
          {open ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <>
          {/* Full Screen Display Overlay */}
          <div
            className="absolute inset-0 top-20 bg-slate-300 z-10"
            onClick={handleClick}
          ></div>
          <nav className="md:hidden flex">
            <ul className="absolute top-20 right-0 w-1/2 pt-5 bg-gray-500 h-full flex flex-col items-center space-y-4 z-20">
              <li className={isActive("/")}>
                <Link href="/" className="hover:text-orange-600" onClick={() => setOpen(false)}>Home</Link>
              </li>
              <li className={isActive("/services")}>
                <Link href="/services" className="hover:text-orange-600" onClick={() => setOpen(false)}>Service</Link>
              </li>
              <li className={isActive("/about")}>
                <Link href="/about" className="hover:text-orange-600" onClick={() => setOpen(false)}>About</Link>
              </li>
              <li className={isActive("/contact")}>
                <Link href="/contact" className="hover:text-orange-600" onClick={() => setOpen(false)}>Contact</Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Navbar;
