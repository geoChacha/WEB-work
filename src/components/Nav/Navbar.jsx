import React from "react";
import Animation from "./Animation";
const Navbar = () => {
    return(
        <div className="z-10 sticky top-0.5 w-screen h-25 bg-gray-800 flex justify-between items-center px-4">
            <div className="text-2xl text-orange-600 font-bold">Asad Ali</div>
            <Animation/>
            <ul className="flex relative right-10 space-x-4 text-white">
                <li className="hover:text-blue-400 font-bold text-orange-600 cursor-pointer">Home</li>
                <li className="hover:text-blue-400 font-bold text-orange-600 cursor-pointer">About Me</li>
                <li className="hover:text-blue-400 font-bold text-orange-600 cursor-pointer">Projects</li>
                <li className="hover:text-blue-400 font-bold text-orange-600 cursor-pointer">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;