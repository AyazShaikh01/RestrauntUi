import React, { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="navber overflow-x-hidden fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-9 py-3 bg-customPalette-navBG text-white gap-10">
        <div className="logo flex justify-center items-center gap-5">
          <img src="../src/assets/logo.png" alt="" className="w-200 h-10 " />
          <button
            className="Menu scale-125 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i class="ri-menu-3-line"></i>
          </button>
        </div>
        <nav className="links hidden md:flex ">
          <ul className="flex justify-center items-center gap-10">
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Menu</li>
            <li>About US</li>
            <li>Contact US</li>
          </ul>
        </nav>
        <div className="cta flex justify-center items-center gap-2">
          <i class="ri-search-line scale-125"></i>
          <button className="bg-yellow-400 px-2">ENQUIRY</button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className=" mobile-menu md:hidden">
          <ul className="flex flex-col gap-2 p-4 bg-customPalette-navBG text-white text-center fixed top-10 left-0 right-0 z-50">
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Menu</li>
            <li>About US</li>
            <li>Contact US</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
