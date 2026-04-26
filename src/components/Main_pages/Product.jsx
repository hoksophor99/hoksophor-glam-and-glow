import React, { useState } from 'react'
import { Heart, Star, ShoppingCart } from "lucide-react";
import { project } from '../../data/project'

const Product = () => {
  const products = project.bestSellers;
  const [showAll, setShowAll] = useState(false);


  
  // show only 6 unless showAll = true
  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <>
      <section className="w-full py-16 px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-12">
          Best Sellers
        </h2>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {visibleProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border  
              rounded-t-[150px] 
              sm:rounded-t-[200px] 
              md:rounded-t-[250px] 
              lg:rounded-t-[300px] p-6 shadow-sm transition-all duration-500 
              hover:shadow-xl hover:-translate-y-2"
            >

              {/* Curved Top */}
              <div
                className={`w-full h-40 rounded-t-[150px] 
                sm:rounded-t-[200px] 
                md:rounded-t-[250px] 
                lg:rounded-t-[400px] rounded-b-[10%] ${item.bg} flex items-center justify-center overflow-visible`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-40 h-40 md:w-50 md:h-50 object-contain absolute mt-14 transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium mt-15">{item.title}</h3>

              {/* Price */}
              <div className="flex items-center gap-3 mt-2">
                <p className="text-2xl font-semibold">${item.price}</p>
                <p className="line-through text-gray-400">${item.oldPrice}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2 text-gray-600 text-sm">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span>{item.rating}</span>
                <span className="ml-1">{item.reviews} reviews</span>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between mt-6">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full border hover:bg-black hover:text-white transition-all duration-300">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>

                <button className="ml-3 p-3 rounded-full border hover:bg-black hover:text-white transition-all duration-300">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SEE MORE BUTTON */}
        {products.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-[#972146] text-white rounded-full 
              hover:scale-110 transition-all"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default Product
