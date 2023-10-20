import Image from "next/image"
import { useState } from "react"
import { FaArrowDown } from "react-icons/fa"

export default function TabsContent() {
  const [tabNumber, setTabNumber] = useState(1)

  return (
  <>
    <div id="tabs">
      <div className="text-center border-2 border-black text-black bg-[#D1E8E2] font-mono text-3xl font-bold py-5">
        Skeleton Tabs For Reuse
      </div>
      <div className="border-2 bg-[#F4F1DE] border-black">
        <div className="flex font-mono flex-row space-x-5 items-center justify-center py-3 min-w-full">
          {/* 3 Tab Buttons on the center top */}
          <button className="bg-black p-3 px-8 text-white border-2 border-white hover:bg-white hover:text-black hover:border-black " onClick={() => setTabNumber(1)}>Tab 1</button>
          <button className="bg-black p-3 px-8 text-white border-2 border-white hover:bg-white hover:text-black hover:border-black " onClick={() => setTabNumber(2)}>Tab 2</button>
          <button className="bg-black p-3 px-8 text-white border-2 border-white hover:bg-white hover:text-black hover:border-black " onClick={() => setTabNumber(3)}>Tab 3</button>
        </div>

        {/* Tab Content */}
        {tabNumber === 1 && (
        <div className="flex font-mono flex-col items-center justify-center py-5 min-w-full">
          <div className="pb-5">
            <h1 className="text-3xl font-bold text-black font-mono text-center">
              Tab 1 Content
            </h1>
            <p className="text-center">
              This is some random text that actually represents the content of Tab 1. 
            </p>
          </div>
          <div>
            <Image
              src="https://img.freepik.com/premium-photo/exploding-multicolor-powder-color-square-shape-with-background_31965-97238.jpg"
              width={600}
              height={600} 
              alt="Tab 1 Image"
            />
          </div>
        </div>
        )}

        {tabNumber === 2 && (
        <div className="flex flex-col font-mono items-center justify-center py-5 min-w-full">
          <div className="pb-5">
            <h1 className="text-3xl font-bold text-black font-mono text-center">
              Tab 2 Content
            </h1>
            <p className="text-center">
              This is some random text that actually represents the content of Tab 2.
            </p>
          </div>
          <div>
            <Image
              src="https://img.freepik.com/premium-photo/white-background-square-frame-neon-picture-frame-blank-empty-background-pretty-backdrop_715671-3197.jpg" 
              width={600}
              height={600} 
              alt="Tab 2 Image" 
            />
          </div>
        </div>
        )}
        
        {tabNumber === 3 && (
        <div className="flex flex-col font-mono items-center justify-center py-5 min-w-full">
          <div className="pb-5">
            <h1 className="text-3xl font-bold text-black font-mono text-center">
              Tab 3 Content
            </h1>
            <p className="text-center">
              This is some random text that actually represents the content of Tab 3.
            </p>
          </div>
          <div>
            <Image
              src="https://img.freepik.com/premium-photo/exploding-multicolor-powder-color-square-shape-with-background_31965-78302.jpg?w=2000"
              width={600}
              height={600} 
              alt="Tab 3 Image"
            />
          </div>
        </div>
        )}
      </div>
    </div>
    <div className="flex flex-col items-center justify-center pt-10 animate-bounce cursor-pointer">
      {/* <a href="#tabs" className="text-center"> */}
        <h1 className="text-3xl font-bold font-mono">Go to Next component</h1>
        <div className="flex items-center justify-center">
          <FaArrowDown className="text-3xl text-center text-black" />
        </div>
      {/* </a> */}
    </div>
  </>
  )
}