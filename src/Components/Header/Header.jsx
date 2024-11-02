import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-sky-950 border-black px-4 lg:px-6 py-2.5 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    
                    <Link to='/' className='flex items-center'>
                    <img src= './src/assets/Boorduy.jpeg' className="mr-3 h-12 rounded-full" alt="logo"/>
                    </Link> 
                <div className="flex items-center lg:order-2">
                <Link to='#'className="text-gray-800 bg-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">login</Link>
                <Link to='#' className="text-white bg-orange-700 hover:bg-red-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 mr-2 focus:outline-none">Get started</Link>
                </div> 
                    
                    <div className="hidden justify-between items-center w-min lg:flex lg:w-5 lg:order-1"
                        id="mobile-menu-2">
                    
                    <ul className="flex flex-col mt-4 mr-44 lg:font-medium lg:flex-row lg:space-x-16 lg:mt-0 lg:-ml-36 ">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive, isPending}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                    ${isActive ? "text-orange-500" :  "text-gray-400"}
                                    lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="about"
                                    className={({isActive, isPending}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                    ${isActive ? "text-orange-500" :  "text-gray-400"} lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="Contact"
                                    className={({isActive, isPending}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                    ${isActive ? "text-orange-500" :  "text-gray-400"} lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="User"
                                    className={({isActive, isPending}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                    ${isActive ? "text-orange-500" :  "text-gray-400"} lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                                    }
                                >
                                    User
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="Projects"
                                    className={({isActive, isPending}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                    ${isActive ? "text-orange-500" :  "text-gray-400"} lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="Github"
                                    className={({isActive, isPending}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                    ${isActive ? "text-orange-500" :  "text-gray-400"} lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    
                    </div>  

                    {/* <Link to='about' className='flex items-center'>
                    <img src= './src/assets/about.png' className="mr-3 h-12" alt="logo"/>
                    </Link> */}
                </div>
            </nav>
        </header>
    )

}
//first instinct is anchor tag but nope
//anchor tag but it reloads the page and takes us to another resource. control 
//is given to the browser and the dom which is in the browser itself we dont want that because 
//its a single page appbut we dont want that. remember this is all a fascade and a simulation from
//moving to slash about whatever its not real
//

export default Header