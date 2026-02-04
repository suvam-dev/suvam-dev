function Navbar() {
    return (
        <>
        <nav className="flex justify-between items-center bg-gray-800 text-blue-500 font-bold p-4 border-b-5 border-blue-500 fixed w-full">
            <div className="flex space-x-4">
                <button className="text-white px-6 py-2 rounded hover:bg-blue-600 hover:text-white">Logo</button>
            </div>
            <ul className="flex space-x-4 justify-end">
                <li className="text-blue-500 px-6 py-2 hover:bg-blue-500 hover:text-white">Home</li>
                <li className="text-blue-500 px-6 py-2 hover:bg-blue-500 hover:text-white">About</li>
                <li className="text-blue-500 px-6 py-2 hover:bg-blue-500 hover:text-white">Contact</li>
            </ul>
        </nav>
        <div className="h-[10vh]"></div>
        </>
    );
}
export default Navbar;