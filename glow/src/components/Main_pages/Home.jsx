import React from 'react'
import { project } from '../../data/project'



const Home = () => {

     const stats = [
        { number: "500+", label: "Authentic Products" },
        { number: "60+", label: "Authentic Products" },
        { number: "100+", label: "International Franchises" },
        { number: "1 Million+", label: "Sales through-out the world" },
    ];

  return (
    <>
    <section className="w-full flex justify-center px-4 md:px-10 py-4 mt-15">
        <div className="w-full max-w-8xl bg-[#FFF8F8] rounded-3xl p-8 md:p-14 relative overflow-hidden">

            {/* Left Image */}
            <img
            src={project.Lipstick}
            alt="lipstick"
            className="hidden md:block absolute left-3rem bottom-0 w-[300px] object-contain 
            animate-float hover:scale-110 transition-transform duration-500"
            />

            {/* Right Image */}
            <img
            src={project.Logo2}
            alt="brush"
            className="hidden md:block absolute right-0 bottom-0 w-[350px] object-contain 
            animate-float-slow hover:scale-110 transition-transform duration-500"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center gap-5 max-w-3xl mx-auto 
            opacity-0 animate-fade-up">

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-serif leading-tight">
                <span className="text-[#972146]">Glam & Glow</span> – Elegant,
                <br /> Chic, and Modern
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-base md:text-lg max-w-xl">
                Unleash Your Inner Glow with Luxurious Beauty Essentials
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="bg-[#972146] text-white px-6 py-3 rounded-full flex items-center gap-2
                hover:bg-rose-800 hover:scale-105 hover:shadow-xl transition-all duration-300">
                Shop the Look →
                </button>

                <button className="border border-gray-300 px-6 py-3 rounded-full bg-white flex items-center gap-2
                hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-300">
                Today’s Deal 🔥
                </button>
            </div>

            {/* Users */}
            <div className="flex items-center gap-4 mt-6 animate-fade-up delay-200">
                <div className="flex -space-x-3">
                <img
                    src={project.Profile1}
                    className="w-10 h-10 rounded-full border-2 border-white hover:scale-110 transition duration-300"
                />
                <img
                    src={project.Profile2}
                    className="w-10 h-10 rounded-full border-2 border-white hover:scale-110 transition duration-300"
                />
                <img
                    src={project.Profile3}
                    className="w-10 h-10 rounded-full border-2 border-white hover:scale-110 transition duration-300"
                />
                </div>

                <div>
                <p className="text-lg font-semibold">100+</p>
                <p className="text-gray-500 text-sm -mt-1">Active Users</p>
                </div>
            </div>
            </div>
        </div>
    </section>
     <section className="w-full py-14 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center gap-10">

        {stats.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center"
          >

            {/* Number */}
            <h2 className="text-3xl md:text-4xl font-serif ">
              {item.number}
            </h2>

            {/* Label */}
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              {item.label}
            </p>

            {/* Vertical Divider (hide on mobile) */}
            {index !== stats.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-2 h-14 w-[1px] bg-gray-300"></div>
            )}
          </div>
        ))}

      </div>
    </section>

    </>
  )
}

export default Home
