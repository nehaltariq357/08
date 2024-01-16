import React from "react";

function All_Category() {
  return (
    <>
       <div className="h-12 flex">
      <ul className="flex items-center justify-evenly content-center pt-3 font-bold w-full max-w-screen-xl mx-auto uppercase">
        <li className="category-item">All Categories</li>
        <li className="category-item">Electronics</li>
        <li className="category-item">Men</li>
        <li className="category-item">Women</li>
        <li className="category-item">Home</li>
        <li className="category-item">Beauty & Fragrance</li>
        <li className="category-item">Baby</li>
        <li className="category-item">Toys</li>
        <li className="category-item">Sports</li>
        <li className="category-item">Health & Nutrition</li>
      </ul>
    </div>
    <div><img src="https://f.nooncdn.com/mpcms/EN0001/assets/cd51e349-e331-4747-a893-c35b6acc0085.png?format=avif" alt="" /></div>
    </>
  );
}

export default All_Category;
