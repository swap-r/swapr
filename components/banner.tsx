import Image from "next/image"

const Banner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">swapR</h1>
            <p className="text-xl md:text-2xl font-light mb-6">"Rewriting Train Travel with the Power of People."</p>
            <p className="text-lg mb-8">
              The smart way to swap train seats on Indian Railways. Connect with fellow passengers and enjoy a more
              comfortable journey.
            </p>
          </div>

          <div className="relative w-full max-w-md">
            <div className="bg-white p-3 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-blue-900/20">
              <Image
                src="/images/app-screenshot.png"
                alt="SwapR App"
                width={600}
                height={300}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
