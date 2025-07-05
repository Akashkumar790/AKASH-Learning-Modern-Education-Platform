
// import React from 'react'
// import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

// export default function Header() {
//     return(
  
//         <header className="shadow sticky z-50 top-0">
//             <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                     <Link to="/" className="flex items-center">
//                         <img
//                             //  src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
//                             src="cutting edge logo.png"
//                             className="mr-3 h-12"
//                             alt="Logo"
//                         />
//                     </Link>
//                     <div className="flex items-center lg:order-2">
//                         <Link
//                             to="#"
//                             className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Log in
//                         </Link>
//                         <Link
//                             to="#"
//                             className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Get started
//                         </Link>
//                     </div>
//                     <div
//                         className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//                         id="mobile-menu-2"
//                     >
//                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                             <li>
//                                 <NavLink
//                                 to="/"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/about"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     About
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/contact"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Contact
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/github"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Github
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/courses"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Courses
//                                 </NavLink>
//                             </li>
                            
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );

// } 







import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [showLogin, setShowLogin] = useState(false);

    const toggleLoginModal = () => setShowLogin(!showLogin);

    return (
        <>
            <header className="shadow sticky z-50 top-0">
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img
                                src="cutting edge logo.png"
                                className="mr-3 h-12"
                                alt="Logo"
                            />
                        </Link>

                        {/* Buttons */}
                        <div className="flex items-center lg:order-2">
                            <button
                                onClick={toggleLoginModal}
                                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 focus:outline-none"
                            >
                                Log in
                            </button>
                            <Link
                                to="/signup"
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 focus:outline-none"
                            >
                                Get started
                            </Link>
                        </div>

                        {/* Navigation Menu */}
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                {[
                                    { to: '/', label: 'Home' },
                                    { to: '/about', label: 'About' },
                                    { to: '/contact', label: 'Contact' },
                                    { to: '/github', label: 'Github' },
                                    { to: '/courses', label: 'Courses' },
                                ].map(({ to, label }) => (
                                    <li key={label}>
                                        <NavLink
                                            to={to}
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${
                                                    isActive ? 'text-orange-700' : 'text-gray-700'
                                                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            {label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Login Modal */}
            {showLogin && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                        <button
                            onClick={toggleLoginModal}
                            className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Login</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-orange-700 text-white py-2 rounded hover:bg-orange-800"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
