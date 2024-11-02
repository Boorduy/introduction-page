import React from "react";
import { Link } from "react-router-dom";

function Home() {
return(<div className="mx-auto w-full max-w-7xl">
    <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 lg:px-8">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px">
            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                <h2 className=" text-4xl font-bold sm:text-5xl text-fuchsia-200  ">
                    Welcome to My Page
                    <span className=" animate-typing overflow-hidden whitespace-nowrap border-r-2 font-bold sm:block text-3xl max-w-xl sm:mt-1 mt-40 space-y-8 text-center sm:text-right sm:ml-auto text-red-300">
                    Print Bardia Nazeri
                    </span>
                </h2>
                <Link className="inline-flex text-black items-center px-6 py-3 font-medium bg-red-300 bg-opacity-80 rounded-lg hover:bg-opacity-50 hover:text-slate-600"
                to='/about'>
                    <svg
    fill="gray"
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
>
    <path d="M12 12c2.485 0 4.5-2.015 4.5-4.5s-2.015-4.5-4.5-4.5-4.5 2.015-4.5 4.5 2.015 4.5 4.5 4.5zm0 1.5c-3.589 0-6.5 2.911-6.5 6.5h13c0-3.589-2.911-6.5-6.5-6.5z"/>
</svg>
                            &nbsp; Get to Know Me
                </Link>
            </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
            <img className="w-80 my-2" src="./src/assets/codeSite.png"/>
        </div>
    </aside>
    <div className="grid place-items-center sm:mt-20">
        <img className="sm:w-80 w-48" src="./src/assets/netanddetail.png" alt="image2"/>
    </div>
    <h1 className="text-center font-medium text-2xl sm:text-5xl pt-0 pb-4 text-fuchsia-300 opacity-60 bg-fuchsia-300 bg-opacity-5">Help us Scale our App</h1>
</div>)
}
export default Home
//or just type rfce to bring the name of the file we created in this format above this text