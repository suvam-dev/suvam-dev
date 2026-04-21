function Card(prop) {
    return (
        <div className="flex flex-col items-center justify-center w-[200px] h-[200px] bg-gray-800 text-blue-500 font-bold p-4 border-2 border-blue-500 m-2">
            {prop.name}
            {prop.description}
            {prop.image}
            {prop.link}
        </div>
    )
}
export default Card;
