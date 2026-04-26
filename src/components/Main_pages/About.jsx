import React from 'react'
import { ArrowRight } from "lucide-react";
import { project } from '../../data/project'


const About = () => {

  return (
<section className="w-full px-6 md:px-12 py-8">
      <div
        className="max-w-7xl mx-auto [#FCECEC] bg-linear-to-r from-[#FCECEC] to-[#ffffff] rounded-[40px] p-6 md:p-12 
        flex flex-col lg:flex-row items-center gap-15 
        opacity-0 animate-fade-up"
      >

        {/* LEFT SIDE IMAGE AREA */}
        <div className="relative w-full h-96 lg:w-2/5 flex justify-center">

          {/* MAIN IMAGE */}
          <img
            src={project.Model1}
            alt="Beauty Tips"
            className="w-full max-w-md rounded-tl-[200px] object-cover 
            shadow-lg transition-transform duration-700 hover:scale-105"
          />

          {/* SMALL TOP PRODUCT CIRCLE */}
          <div
            className="absolute -top-6 right-6 w-20 h-20 bg-white shadow-lg 
            rounded-full flex items-center justify-center 
            animate-float"
          >
            <img src={project.Model2}
            className="w-24 h-24 object-contain" />
          </div>

          {/* SMALL BOTTOM PRODUCT CIRCLE */}
          <div
            className="absolute -bottom-6 left-8 w-32  h-32 bg-white shadow-lg 
            rounded-full flex items-center justify-center 
            animate-float-slow"
          >
            <img src={project.Model3}
            className="w-32 h-32 object-contain" />
          </div>

        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Beauty Tips & Trends
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Stay updated with the latest beauty trends, expert tips, and
            must-have products to elevate your look. Discover pro makeup hacks,
            skincare essentials, and step-by-step tutorials to achieve flawless
            beauty effortlessly.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Explore the hottest makeup trends that are taking over the beauty
            industry. From dewy skin looks to bold lip shades, get inspired for
            every season and learn beauty secrets loved by makeup artists.
          </p>

          {/* BUTTON */}
          <button
            className="bg-[#972146] text-white px-6 py-3 rounded-full flex items-center gap-2 
            mx-auto lg:mx-0 hover:bg-rose-800 hover:scale-105 transition-all duration-300"
          >
            Get the Look
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  )
}

export default About
