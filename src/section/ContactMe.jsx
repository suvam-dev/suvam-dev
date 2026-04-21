import { about } from "../data/about"
function ContactMe() {
    return (
        <div className="flex flex-col items-center justify-center mt-2 mx-2 rounded-bl-3xl rounded-tr-3xl p-5 bg-gradient-to-r from-red-800 to-blue-800 ">
            <div className="text-blue-500 font-bold text-5xl m-2 justify-center items-center">About Me</div>
            <div className="flex flex-row items-center justify-center mt-2  w-[100%]">
                {about[0]}
            </div>
        </div>
    )
}
export default ContactMe;