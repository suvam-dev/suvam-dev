import Spline from '@splinetool/react-spline';

function Landing() {
    return (
        <div className="flex justify-between flex-row max-md:flex-col-reverse h-[90vh] bg-gray-800 mt-2">
            {/* <div className="max-md:text-center w-[50%] max-md:w-full max-md:mx-auto">I am Suvam Ghosh. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, assumenda rem corrupti id harum hic suscipit repudiandae laudantium unde? Aperiam sunt cumque libero iusto sequi, iste, dolor aliquid sapiente et id blanditiis explicabo soluta possimus. Maiores illo praesentium dolorum ipsam ex earum voluptatem?</div> */}
            <div className=" w-full max-md:w-full max-md:mx-auto bg-gray-300 justify-center align-center">
                <Spline
                    scene="https://prod.spline.design/8GmVrF4UUrTxHfiP/scene.splinecode"
                />
            </div>
        </div>
    )
}
export default Landing;