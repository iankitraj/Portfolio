import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md border-b border-gray-200">
            <nav className="max-w-screen-xl mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-gray-900">
                    Ankit
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-8 font-medium text-gray-700">
                    {['/', '/about', '/skills', '/contact', '/github'].map((path, i) => {
                        const labels = ['Home', 'About', 'Skills', 'Contact', 'GitHub'];
                        return (
                            <li key={i}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `transition-colors duration-200 ${isActive ? "text-orange-700" : "hover:text-orange-600"
                                        }`
                                    }
                                >
                                    {labels[i]}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                {/* Buttons */}
                <div className="hidden lg:flex space-x-4">
                    <Link
                        to="/"
                        className="px-4 py-2 text-white bg-orange-700 rounded-lg hover:bg-orange-800 transition"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-md">
                    <ul className="flex flex-col space-y-4 p-4 font-medium text-gray-700">
                        {['/', '/about', '/skills', '/contact', '/github'].map((path, i) => {
                            const labels = ['Home', 'About', 'Skills', 'Contact', 'GitHub'];
                            return (
                                <li key={i}>
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) =>
                                            `transition-colors duration-200 ${isActive ? "text-orange-700" : "hover:text-orange-600"
                                            }`
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {labels[i]}
                                    </NavLink>
                                </li>
                            );
                        })}

                        {/* Mobile Get Started Button */}
                        <div className="flex flex-col mt-4 space-y-2">
                            <Link
                                to="/"
                                className="px-4 py-2 text-white bg-orange-700 rounded-lg hover:bg-orange-800 transition text-center"
                            >
                                Get Started
                            </Link>
                        </div>
                    </ul>
                </div>
            )}
        </header>
    );
}
