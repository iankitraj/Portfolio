import React from "react";

export default function Footer() {
    return (
        <footer className="backdrop-blur-md bg-white/70 border-t border-gray-200">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-8 text-center">
                {/* Logo */}
                <div className="mb-6 flex justify-center">
                    <span className="text-2xl font-bold text-gray-900">Ankit</span>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
                    {/* Resources */}
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                        <ul className="text-gray-500 font-medium space-y-2">
                            <li>
                                <a href="/" className="hover:text-orange-600 transition-colors duration-300">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-orange-600 transition-colors duration-300">About</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                        <ul className="text-gray-500 font-medium space-y-2">
                            <li>
                                <a href="https://github.com/iankitraj" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors duration-300">GitHub</a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100021785310229" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition-colors duration-300">Facebook</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                        <ul className="text-gray-500 font-medium space-y-2">
                            <li>
                                <a href="#" className="hover:text-gray-900 transition-colors duration-300">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-900 transition-colors duration-300">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-6 border-gray-200" />

                {/* Footer Bottom */}
                <div className="text-gray-500 text-sm">
                    © 2025 <a href="https://github.com/iankitraj/" className="hover:text-gray-900 transition-colors duration-300">iankitraj</a>. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
