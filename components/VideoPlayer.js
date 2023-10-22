import { FaArrowDown } from "react-icons/fa"

export default function VideoPlayer() {
  return (
    <>
      { /* Appealing Custom Video Player with beautiful UI */ }
      <div className="container font-mono bg-black text-white" id="videoplayer">
        <h1 className="text-3xl font-bold text-center p-10 border">Video Player</h1>
        <div className="w-screen">
          <video src="/video1.mp4" controls autoPlay={true} className="w-full h-auto max-sm:h-auto">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-10 animate-bounce cursor-pointer">
      {/* <a href="#videoplayer" className="text-center"> */}
        <h1 className="text-3xl font-bold font-mono">Go to Next Component</h1>
        <div className="flex items-center justify-center">
          <FaArrowDown className="text-3xl text-center text-black" />
        </div>
      {/* </a> */}
    </div>
    </>
  )
}
