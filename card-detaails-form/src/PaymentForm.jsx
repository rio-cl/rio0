import React from "react";
import CardFront from "./assets/bg-card-front.png";
import CardBack from "./assets/bg-card-back.png";
import MainBg from "./assets/bg-main-desktop.png";

const PaymentForm = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side: Card section full height */}
      <div className="relative w-full md:w-2/5 h-screen flex justify-center items-center">
        {/* Background Image */}
        <img
          src={MainBg}
          alt="Main Background"
          className="absolute inset-0 w-60px h-full object-cover"
        />

        {/* Cards container */}
        <div className="relative z-10 flex flex-col space-y-8 items-start justify-center px-6 translate-x-20">
          {/* Front Card */}
          <div className="relative translate-x-2">
            <img
              src={CardFront}
              alt="Card Front"
              className="w-80 rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-between text-white">
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 bg-white rounded-full"></div>
                <div className="w-3 h-3 border-2 border-white rounded-full"></div>
              </div>
              <div className="text-lg tracking-widest">0000 0000 0000 0000</div>
              <div className="flex justify-between text-sm">
                <span>JANE APPLESEED</span>
                <span>00/00</span>
              </div>
            </div>
          </div>

          {/* Back Card */}
          <div className="relative ml-20">
            <img
              src={CardBack}
              alt="Card Back"
              className="w-80 rounded-lg shadow-lg"
            />
            <div className="absolute top-0 right-6 bottom-0 flex items-center justify-end pr-4 text-black text-sm">
              000
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-end bg-white-100 ">
        <form className="w-full max-w-md space-y-4 pl-2 pr-2">
          <div>
            <label className="block text-xs font-semibold mb-1">
              CARDHOLDER NAME
            </label>
            <input
              type="text"
              placeholder="e.g. Jane Appleseed"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">
              CARD NUMBER
            </label>
            <input
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-xs font-semibold mb-1">
                EXP. DATE (MM/YY)
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="MM"
                  className="w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  placeholder="YY"
                  className="w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-xs font-semibold mb-1">CVC</label>
              <input
                type="text"
                placeholder="e.g. 123"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-900 text-white rounded-md p-3 mt-4 hover:bg-purple-800 transition"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
