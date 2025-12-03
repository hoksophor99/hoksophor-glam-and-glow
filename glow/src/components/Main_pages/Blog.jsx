import React from 'react'
import { motion } from "framer-motion";
import { project } from '../../data/project'

const Blog = () => {
    const blogs = project.blog;
  return (
<div className="grid grid-cols-1 lg:grid-cols-3 p-6 md:p-30 gap-10">

  <div className="lg:col-span-2 flex flex-col gap-6">

    {/* Title under card */}
    <div >
      <h2 className="text-5xl font-serif">About Skin Care Latest</h2>
      <p className="text-5xl font-serif text-[#B0163C]">Blog & News</p>
    </div>
    {/* Big card */}
    <BlogCard
      item={blogs[0]}
      className="h-[350px] md:h-[420px]"
    />

  </div>

  {/* RIGHT COLUMN (two small cards) */}
  <div className="flex flex-col gap-10">
    <BlogCard item={blogs[1]} className="h-[200px] md:h-[250px]" />
    <BlogCard item={blogs[2]} className="h-[200px] md:h-[250px]" />
  </div>

</div>
  );
};

function BlogCard({ item, className }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`relative rounded-2xl overflow-hidden cursor-pointer ${className}`}
    >
      {/* Background Image */}
      <motion.img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h3 className="text-3xl md:text-4xl font-serif mb-8 drop-shadow-lg">
          {item.title}
        </h3>

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="border border-white px-6 py-2 rounded-full text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}



export default Blog
