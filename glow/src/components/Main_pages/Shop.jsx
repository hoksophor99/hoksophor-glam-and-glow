import { useState } from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { project } from "../../data/project";

const categories = ["All", "BB Cream", "Foundation", "Lips", "Eyes"];

const Shop = () => {
  const products = project.shop;

  const [active, setActive] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // FILTER LOGIC  ✔️
  const filteredProducts =
    active === "All"
      ? products
      : products.filter((item) => item.category === active);

  // Limit to 6 unless showAll ✔️
  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  return (
    <section className="w-full py-16 px-6">

      {/* TOP BAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4">
        <h2 className="text-3xl font-serif">New Arrivals</h2>

        {/* CATEGORY PILLS */}
        <div className="flex items-center space-x-1 rounded-full border border-gray-200 bg-white px-1 py-1">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setShowAll(false); // Reset show more when switching
              }}
              className={`px-4 py-2 rounded-full text-sm transition
                ${
                  active === item
                    ? "bg-[#B0163C] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border               
              rounded-t-[150px] 
              sm:rounded-t-[200px] 
              md:rounded-t-[250px] 
              lg:rounded-t-[300px]
              p-6 shadow-sm transition-all duration-500 
              hover:shadow-xl hover:-translate-y-2"
          >
            {/* IMAGE SECTION */}
            <div
              className={`w-full h-40 rounded-t-[150px] 
                sm:rounded-t-[200px] 
                md:rounded-t-[250px] 
                lg:rounded-t-[400px]
                rounded-b-[10%] ${item.bg} 
                flex items-center justify-center overflow-visible`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-40 h-40 md:w-50 md:h-50 object-contain absolute mt-14 transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-medium mt-15">{item.title}</h3>

            {/* PRICE */}
            <div className="flex items-center gap-3 mt-2">
              <p className="text-2xl font-semibold">${item.price}</p>
              <p className="line-through text-gray-400">${item.oldPrice}</p>
            </div>

            {/* RATING */}
            <div className="flex items-center gap-1 mt-2 text-gray-600 text-sm">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>{item.rating}</span>
              <span className="ml-1">{item.reviews} reviews</span>
            </div>

            {/* BUTTONS */}
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
      {filteredProducts.length > 6 && (
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
  );
};

export default Shop;
