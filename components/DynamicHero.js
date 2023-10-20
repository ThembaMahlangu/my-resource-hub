export default function DynamicHero({ text1, text2, image }) {
    return (
      <>
        <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="h-[30vh]">
          <div className="bg-black bg-opacity-50 h-[30vh]">
            <div className="text-center pt-10">
              <h1 className="text-5xl max-sm:text-4xl md:text-6xl text-orange-200 font-bold mb-5"><span className="uppercase text-orange-400">{text1}</span> {text2}</h1>
            </div>
          </div>
        </div>
      </>
    )
  }
  