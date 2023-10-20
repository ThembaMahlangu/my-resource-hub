import Link from 'next/link'
import React from 'react'

export default function HomeHero() {
  return (
    <section className="text-white h-[90vh]" style={{backgroundImage: "url('/Tech_Trends.webp')", backgroundSize: "cover", backgroundPosition: "center"}}>
      {/* Position the text on the middle left of the screen */}
      <div className="w-1/2 h-auto flex space-y-3 flex-col justify-center items-start ms-5 py-72 max-sm:py-32">
        <h1 className="text-5xl max-sm:text-3xl font-bold">Themba's Resources Hub</h1>
        <p className="text-xl max-sm:text-sm">A collection of resources for web developers</p>
        <Link href="/components">
          <button className="bg-white text-black font-bold py-2 px-4 border-2 hover:bg-black hover:text-white hover:border-white border-gray-950">
            Get Started
          </button>
        </Link>
      </div>
    </section>

  )
}
