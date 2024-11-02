import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    const copyToClipboard = () => {
        window.navigator.clipboard.writeText('bardia.nazeri0@gmail.com')
        
    }
    return (
        <footer className="bg-gray-100 bg-opacity-10 text-white"> 
            <div className="mx-auto w-full max-w-screen-xl p-10 py-6 lg:py-8">
                <div className="md:flex md:justify-between ">
                   <div className="mb-10 md:mb-0 ml-2 my-12">
                  <Link to='/' className="flex items-center ml-4">
                            <img 
                            src="./src/assets/andy.jpg"
                             alt='logo'
                             className="mr-3 h-16 rounded-full"/>
                            
                        </Link>
                        <h2>Github Account</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-slate-400 uppercase">Resources</h2>
                                <ul className="text-blue-300 font-medium">
                                    <li className="mb-4">
                                        <Link to='/' className=" text-gray-400 font-bold hover:underline">
                                        home
                                        </Link>
                                    </li>
                                    <li >
                                        <Link to='about' className="text-gray-400 font-bold hover:underline">
                                        About
                                        </Link>
                                    </li>
                                </ul>
                                
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-slate-400 uppercase">Follow us</h2>
                                <ul className="text-gray-500 font-medium">
                                    <li className="mb-4">
                                    <a 
                                    href='https://github.com/Boorduy'
                                    className="hover:underline"
                                    target="_blank"
                                    rel="noreferrer">
                                    My Github Profile</a>
                                    </li>
                                    <li>
                                    <a className='hover:text-gray-300 hover:underline cursor-pointer' onClick={copyToClipboard} href="mailto:bardia.nazeri0@gmail.com" target="_blank" rel="noreferrer">copy Email & link</a>
                                    </li>

                                </ul>

                            </div>
                            <div>
                            <h2 className="mb-6 text-sm font-semibold text-slate-400 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul> 
                        </div>
                        </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-300 sm:text-center">
                        
                        <a href="https://github.com/Boorduy" className="hover:underline">
                        © 2024&nbsp;Bardia Nazeri
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        
                        
                        <Link to="https://github.com/Boorduy" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="https://instagram.com/Boorduy" className="text-gray-500">
                            <svg
                                 className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.966.243 2.432.413a4.92 4.92 0 0 1 1.77 1.144 4.92 4.92 0 0 1 1.144 1.77c.17.466.36 1.262.413 2.432.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.243 1.966-.413 2.432a4.92 4.92 0 0 1-1.144 1.77 4.92 4.92 0 0 1-1.77 1.144c-.466.17-1.262.36-2.432.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.966-.243-2.432-.413a4.92 4.92 0 0 1-1.77-1.144 4.92 4.92 0 0 1-1.144-1.77c-.17-.466-.36-1.262-.413-2.432C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.243-1.966.413-2.432a4.92 4.92 0 0 1 1.144-1.77 4.92 4.92 0 0 1 1.77-1.144c.466-.17 1.262-.36 2.432-.413 1.266-.058 1.646-.07 4.85-.07zm0 1.838c-3.168 0-3.527.012-4.777.07-.985.045-1.522.2-1.875.333a3.079 3.079 0 0 0-1.121.729 3.079 3.079 0 0 0-.729 1.121c-.133.353-.288.89-.333 1.875-.058 1.25-.07 1.609-.07 4.777s.012 3.527.07 4.777c.045.985.2 1.522.333 1.875a3.079 3.079 0 0 0 .729 1.121 3.079 3.079 0 0 0 1.121.729c.353.133.89.288 1.875.333 1.25.058 1.609.07 4.777.07s3.527-.012 4.777-.07c.985-.045 1.522-.2 1.875-.333a3.079 3.079 0 0 0 1.121-.729 3.079 3.079 0 0 0 .729-1.121c.133-.353.288-.89.333-1.875.058-1.25.07-1.609.07-4.777s-.012-3.527-.07-4.777c-.045-.985-.2-1.522-.333-1.875a3.079 3.079 0 0 0-.729-1.121 3.079 3.079 0 0 0-1.121-.729c-.353-.133-.89-.288-1.875-.333-1.25-.058-1.609-.07-4.777-.07zm0 4.838a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.838a3.162 3.162 0 1 0 0 6.324 3.162 3.162 0 0 0 0-6.324zm6.406-.75a1.187 1.187 0 1 1 0 2.375 1.187 1.187 0 0 1 0-2.375z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Instagram page</span>
                        </Link>
                        <Link to="https://t.me/Boorduy" target="_blank"
                                    rel="noreferrer" className="text-gray-500">
                            <svg
                              className="w-4 h-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M15.927 1.162a.745.745 0 0 0-.914-.538L.845 5.788a.752.752 0 0 0-.042 1.42l3.672 1.491 1.47 4.644c.163.515.797.688 1.196.33l2.255-2.057 3.965 2.874a.751.751 0 0 0 1.184-.432l2.305-12.932a.752.752 0 0 0-.923-.768l-3.3 1.046ZM5.834 7.432 12.232 5.45l-7.725 3.57a.75.75 0 0 1-.556-1.285l5.882-5.01L5.833 7.431Zm-.69.992 5.958-5.137-1.06 5.946a.752.752 0 0 1-.865.607.75.75 0 0 1-.684-.607l-.813-2.456L5.144 8.423Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Telegram page</span>
                        </Link>
                        <Link to="https://dly.to/2NYkuCKMg4O" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                            >
                                <path
                                    d="M106.6,152.1l-8.7,9.8a47.9,47.9,0,1,1,0-67.8l60.2,67.8a47.9,47.9,0,1,0,0-67.8l-8.7,9.8"
                                    fill="none"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                />
                            </svg>
                            <span className="sr-only">Daily.dev logo</span>
                            
                        </Link>
                            

                        
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer