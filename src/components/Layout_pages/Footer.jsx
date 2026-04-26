import React from 'react'
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Pin } from "lucide-react";


const Footer = () => {
  return (
<footer className="bg-[#1A1C1E] text-gray-300 px-6 md:px-16 lg:px-20 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* COLUMN 1 */}
        <div>
          <h2 className="text-xl font-semibold tracking-wide mb-5">GLIMORA</h2>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin /> 123 Novo Street, Suite 456</li>
            <li className="flex items-center gap-2"><Phone /> +1 (800) 123-4567</li>
            <li className="flex items-center gap-2"><Mail /> support@uomo.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5 text-lg mt-5">
            {[Facebook, Twitter, Instagram, Youtube, Pin].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, y: -3 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="cursor-pointer hover:text-white"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h2 className="text-sm font-semibold tracking-wide mb-4">INFORMATION</h2>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">Log In</li>
            <li className="hover:text-white transition cursor-pointer">Entries Feed</li>
            <li className="hover:text-white transition cursor-pointer">Comments Feed</li>
            <li className="hover:text-white transition cursor-pointer">WordPress.org</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h2 className="text-sm font-semibold tracking-wide mb-4">WHY BUY FROM US</h2>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">About Us</li>
            <li className="hover:text-white transition cursor-pointer">Blog</li>
            <li className="hover:text-white transition cursor-pointer">Compare</li>
            <li className="hover:text-white transition cursor-pointer">Contacts</li>
            <li className="hover:text-white transition cursor-pointer">Gallery</li>
            <li className="hover:text-white transition cursor-pointer">Shop</li>
            <li className="hover:text-white transition cursor-pointer">Wishlist</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h2 className="text-sm font-semibold tracking-wide mb-4">
            SUBSCRIBE AND GET 5% OFF DISCOUNT
          </h2>
          <p className="text-sm mb-5">
            Subscribe to our Newsletter and get bonuses for the next purchase
          </p>

          {/* Email Input */}
          <div className="flex rounded-full border border-gray-500 overflow-hidden w-full mb-6">
            <input
              type="email"
              placeholder="Enter Your E-mail Here"
              className="bg-transparent px-4 py-2 w-full text-sm outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className="bg-white text-black font-semibold px-5 rounded-full"
            >
              JOIN
            </motion.button>
          </div>

          {/* Store Buttons */}
          <div className="flex items-center gap-6 mt-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span className="text-3xl"></span>
              <p className="text-xs leading-tight">
                Download on the <br /> <span className="font-semibold">Apple Store</span>
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span className="text-xl">▶</span>
              <p className="text-xs leading-tight">
                Download on the <br /> <span className="font-semibold">Google Play</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
