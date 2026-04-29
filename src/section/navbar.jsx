import { useState } from "react";
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

function Navbar() {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <nav className="flex justify-between items-center bg-[#050510]/80 backdrop-blur-md text-cyan-400 font-bold p-4 border-b border-cyan-500/30 shadow-[0_4px_30px_rgba(34,211,238,0.1)] fixed w-full max-md:relative z-[1000]">
                <div className="flex space-x-4 items-center">
                    <img src={logo} alt="Suvam Logo" className="w-12 h-12 rounded-full border-2 border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.4)] object-cover hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="md:hidden">
                    <button className="text-white px-6 py-2 rounded hover:bg-cyan-900/50 hover:text-cyan-300 transition-colors" onClick={() => setMenu(!menu)}>{menu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
                </div>
                <ul className={menu ? "absolute top-19 w-full z-50 right-0 flex-col justify-end bg-[#050510]/95 backdrop-blur-xl" : "hidden md:flex md:space-y-0 md:space-x-0 space-y-4 justify-end"}>
                    <li><a href="#home" className="block text-gray-300 px-10 py-4 hover:bg-cyan-900/30 hover:text-cyan-400 transition-colors" onClick={() => setMenu(false)}>Home</a></li>
                    <li><a href="#projects" className="block text-gray-300 px-10 py-4 hover:bg-cyan-900/30 hover:text-cyan-400 transition-colors" onClick={() => setMenu(false)}>Projects</a></li>
                    <li><a href="#about" className="block text-gray-300 px-10 py-4 hover:bg-cyan-900/30 hover:text-cyan-400 transition-colors" onClick={() => setMenu(false)}>About</a></li>
                    <li><a href="#contact" className="block text-gray-300 px-10 py-4 hover:bg-cyan-900/30 hover:text-cyan-400 transition-colors" onClick={() => setMenu(false)}>Contact</a></li>
                </ul>
            </nav>
            <div className="h-[10vh]"></div>
        </>
    );
}
export default Navbar;