import { useState } from 'react'
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className="w-full fixed top-0 z-50 left-0 px-6 md:px-10 py-4 bg-white ">

      {/* Top Row */}
      <div className="flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-10">
          
          {/* Logo */}
          <h1 className="text-3xl font-serif font-semibold cursor-pointer 
            transition-transform duration-300 hover:scale-105">
            Glimora
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
            {[
              { label: "Home", id: "home" },
              { label: "Product", id: "product" },
              { label: "About", id: "about" },
              { label: "Shop", id: "shop" },
              { label: "Blog", id: "blog" },
              { label: "Contact", id: "footer" }
            ].map(({ label, id }) => (
              <li key={id} className="cursor-pointer relative group">
                <a
                  href={`#${id}`}
                  className="transition-colors duration-300 group-hover:text-black"
                >
                  {label}
                </a>

                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black 
                  transition-all duration-300 group-hover:w-full"
                ></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-white border border-gray-200 
            rounded-full px-4 py-2 w-[180px] md:w-[170px] lg:w-[260px] xl:w-[300px]  shadow-sm transition-all duration-300 
            hover:shadow-md focus-within:shadow-md hover:border-gray-300">
            
            <input
              type="text"
              placeholder="Find your beauty"
              className="w-full outline-none text-sm"
            />
            <Search className="w-5 h-5 text-gray-600" />
          </div>

          {/* Icon Buttons */}
          {[Heart, ShoppingBag].map((Icon, i) => (
            <button
              key={i}
              className="p-2 rounded-full border border-gray-200 transition-all duration-300 
                hover:shadow-md hover:border-gray-300 hover:scale-105"
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 lg:hidden rounded-full border border-gray-200 transition-all duration-300 
              hover:shadow-md hover:border-gray-300 hover:scale-105"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown (smooth fade + slide) */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden 
          ${open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
      >
        <div className="px-2 animate-fadeSlide">
          <input
            type="text"
            placeholder="Find your beauty"
            className="w-full px-4 py-2 rounded-full border border-gray-200 outline-none mb-4"
          />

        <ul className="flex flex-col gap-4 text-gray-700 font-medium text-center">
          {[
              { label: "Home", id: "home" },
              { label: "Product", id: "product" },
              { label: "About", id: "about" },
              { label: "Shop", id: "shop" },
              { label: "Blog", id: "blog" },
              { label: "Contact Us", id: "footer" }
          ].map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="cursor-pointer py-2 rounded-md transition-all duration-300 
                hover:bg-gray-100 hover:text-black"
            >
              {label}
            </a>
          ))}
        </ul>
        </div>
      </div>

    </nav>

    </>
  );
};

export default Navbar;
