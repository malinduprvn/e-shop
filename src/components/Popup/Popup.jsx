import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Button from "../Shared/Button";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-gray-900 text-white duration-200 rounded-xl">
            {/* Header section */}
            <div className="flex items-center justify-between">
              <h1>Order Now</h1>
              <div>
                <IoMdCloseCircleOutline
                  onClick={handleOrderPopup}
                  className="text-2xl cursor-pointer"
                />
              </div>
            </div>
            {/* Form section */}
            <div className="mt-4">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
              <input type="text" placeholder="Address" className="form-input" />
             <div className="flex justify-center">
              <Button
                text="Order Now"
                bgColor={"bg-primary"}
                textColor={"text-white"}
              />
              </div>
            </div>
            {/* Add your form fields here */}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;