import { useState } from "react";
import { Menu, X } from 'lucide-react';
function Navbar() {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <nav className="flex justify-between items-center  bg-light-100/80 backdrop-blur-sm text-blue-500 font-bold p-4 border-b-5 border-blue-500 fixed w-full max-md:realtive z-1000">
                <div className="flex space-x-4">
                    <button className="text-white px-6 py-2 rounded hover:bg-blue-600 hover:text-white">Logo</button>
                </div>
                <div className="md:hidden">
                    <button className="text-white px-6 py-2 rounded hover:bg-blue-600 hover:text-white" onClick={() => setMenu(!menu)}>{menu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
                </div>
                <ul className={menu ? "absolute top-19  z-50 right-0 flex-col justify-end bg-gray-800" : "hidden md:flex space-x-4 justify-end"}>
                    <li className="text-blue-500 px-10 py-4 hover:bg-blue-500 hover:text-white">Home</li>
                    <li className="text-blue-500 px-10 py-4 hover:bg-blue-500 hover:text-white">Projects</li>
                    <li className="text-blue-500 px-10 py-4 hover:bg-blue-500 hover:text-white">About</li>
                    <li className="text-blue-500 px-10 py-4 hover:bg-blue-500 hover:text-white">Contact</li>
                </ul>
            </nav>
            <div className="h-[10vh]"></div>
        </>
    );
}
export default Navbar;