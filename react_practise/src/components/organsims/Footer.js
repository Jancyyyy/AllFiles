import React from "react";

const Footer = () => {
  return (
    <div className="border-y-2 border-gray-200 h-[400px]">
      <div className="h-[460px] flex">
        <div>
          <div className="object-contain cursor-pointer mx-16 my-8 border-b-2 w-[250px] px-6">
            <img
              src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135331201.jpg"
              alt="zensar"
              className="h-36 w-48"
            />
          </div>
          <p className="w-[280px] px-4 mx-12 font-medium text-sm text-justify text-gray-500">
            ShopCart brings you the joy of discovery with a huge selection of
            original products from mobiles, fashion,home appliances, groceries,
            ...
          </p>
        </div>

        <div className=" mx-4 w-[260px] my-9">
          <h2 className="font-bold text-lg text-[#050533]">Department</h2>
          <div>
            <ul className="text-base font-medium space-y-5 cursor-pointer -mx-2 font-poppins my-5">
              {/* <li className='flex items-center'><ChevronRightIcon className='footer' />Grievance Addressal</li> */}
              {/* <li className='flex items-center'><ChevronRightIcon className='footer' />Events and other calendars</li> */}
            </ul>
          </div>
        </div>

        <div className=" mx-3 my-9 w-[260px]">
          <h2 className="font-bold text-lg text-[#050533]">About US</h2>
          <div>
            <ul className="text-base font-medium space-y-5 cursor-pointer -mx-2 font-poppins my-5">
              {/* <li className='flex items-center'><ChevronRightIcon className='footer' />Online Fees Payment</li> */}
              {/* <li className='flex items-center'><ChevronRightIcon className='footer' />Sports</li> */}
            </ul>
          </div>
        </div>

        <div className=" mx-3 my-9 w-[270px]">
          <h2 className="font-bold text-lg text-[#050533]">Services</h2>
          <div>
            <ul className="text-base font-medium space-y-5 cursor-pointer -mx-2 font-poppins my-5">
              <li className="flex items-center">RPG Group of Engineering</li>
              <li className="flex items-center">RPG Group of Engineering</li>
              <li className="flex items-center">RPG Group of Engineering</li>
              <li className="flex items-center">RPG Group of Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
