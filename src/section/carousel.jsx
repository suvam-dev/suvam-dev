import CarouselCard from "../components/carousel";
function Carousel() {
    return (
        <>
            <div className="flex flex-row items-center justify-center mt-2 bg-gray-800">
                <h1 className="text-blue-500 font-bold text-5xl">Carousel</h1>
            </div>
            <div className=" flex justify-center">
                <CarouselCard />
            </div>
        </>
    )
}
export default Carousel;