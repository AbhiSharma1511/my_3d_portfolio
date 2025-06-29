'use client';
import React, { useState, useRef, useEffect } from 'react';
import "../app/globals.css";
import Link from 'next/link';
import Image from 'next/image';

// import { FaHome, FaInfoCircle, FaBriefcase, FaServicestack } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <div className="fixed bg-transparent z-10 w-full">
            {/* Navbar Container */}
            <div className="flex justify-between items-center py-2 px-5 md:px-10">
                {/* Logo */}
                <div className="p-1 rounded-md flex gap-2 items-center">
                    <Link href="/">
                        <Image className="rounded-xl" src={"/logo.png"} alt="logo" height={40} width={40} />
                    </Link>
                    <span className="text-2xl font-extrabold text-white tracking-wide">
                        Abhinav <span className="text-yellow-300">Sharma</span>
                    </span>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex px-3 py-1 gap-10 text-white font-semibold">
                    <Link href="/" className="mx-5 hover:text-blue-400 transition text-lg">Home</Link>
                    <Link href="/#about" className="mx-5 hover:text-blue-400 transition text-lg">About Us</Link>
                    <Link href="/#work" className="mx-5 hover:text-blue-400 transition text-lg">Work</Link>
                    <Link href="/#service" className="mx-5 hover:text-blue-400 transition text-lg">Contact</Link>
                </div>

                {/* Contact Us (Desktop) */}
                {/* <div></div> */}

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                        {isMenuOpen ? (
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6  text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div ref={menuRef} className="absolute top-0 left-0 bg-black text-white w-2/3 h-screen z-50 p-5">
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Logo */}
                    <div className="p-1 mb-10 flex gap-3 items-center">
                        <Link href="/">
                            <Image className="rounded-xl" src={"/logo.png"} alt="logo" height={40} width={40} />
                        </Link>
                        <span className="text-2xl font-extrabold text-white tracking-wide">
                            Abhinav <span className="text-yellow-300">Sharma</span>
                        </span>
                    </div>

                    {/* Mobile Links */}
                    <Link href="/" className="flex items-center px-5 py-3 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                        Home
                    </Link>
                    <Link href="/#about-us" className="flex items-center px-5 py-3 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                        About Us
                    </Link>
                    <Link href="/#works" className="flex items-center px-5 py-3 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                        Work
                    </Link>
                    <Link href="/#service" className="flex items-center px-5 py-3 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                        Contact Us
                    </Link>
                </div>
            )}
            <hr className="w-full" />
        </div>
    );
};

export default Navbar;
