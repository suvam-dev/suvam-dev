import Card from "../Components/pojectCard";
function Project() {
    return (
        <>
            <div className="flex flex-row items-center justify-center mt-2 bg-gray-800">
                <h1 className="text-blue-500 font-bold text-5xl">Projects</h1>
            </div>
            <div className="flex flex-wrap items-center justify-center mt-2 bg-gray-800">
                <Card name="project 1" />
                <Card name="project 2" />
                <Card name="project 3" />
                <Card name="project 4" />
                <Card name="project 5" />
            </div>
        </>
    )
}
export default Project;