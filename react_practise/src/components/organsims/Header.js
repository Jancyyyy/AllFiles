import React from "react";
import SearchBar from "../molecules/SearchBar";

const Header = () => {
  return (
    <div className=" flex justify-between items-center h-14 py-4 border border-b-1">
      <div className="flex items-center">
        <img
          src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135331201.jpg"
          className="w-14 h-12"
        />
        <h1 className="font-bold text-xl">ShopCart</h1>
      </div>
      <div className="flex text-base font-semibold space-x-14 items-center cursor-pointer">
        <h1>Categories</h1>
        <h1>Details</h1>
        <h1>What's New</h1>
        <h1>Delivery</h1>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
