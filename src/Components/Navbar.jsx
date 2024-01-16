import React from "react";
import { FaFlag } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <>
     <div className="bg-yellow-300 h-16 flex items-center justify-between px-4">
      <img
        className="w-24"
        src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
        alt="Noon Logo"
      />

      <div className="flex items-center">
        <div className="ml-4 flex items-center">
          <FaFlag />
          <span className="ml-2">Deliver to Dubai</span>
        </div>

        <div className="ml-4">
          <input
            className="w-96 px-2 py-1 rounded border"
            type="text"
            placeholder="What are you looking for?"
          />
        </div>

        <div className="ml-4 flex items-center">
          <span className="ml-2">Login</span>
          <CiLogin className="ml-2" />
        </div>

        <div className="ml-4 flex items-center">
          <span className="ml-2">Wishlist</span>
          <FaRegHeart className="ml-2" />
        </div>

        <div className="ml-4 flex items-center">
          <span className="ml-2">Cart</span>
          <IoCartOutline className="ml-2" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Navbar;
