import React from "react";
import MainWeb from "./assets/image-web-3-desktop.jpg";
import Logo from "./assets/logo.svg";
import imageOne from "./assets/image-retro-pcs.jpg";
import imageTwo from "./assets/image-top-laptops.jpg"
import imageThree from "./assets/image-gaming-growth.jpg"

function HomePage() {
  return (
    <div className="bg-gray-100 max-h-screen flex items-center justify-center">
      <div className="bg-white max-w-6xl w-full shadow-md rounded-md p-16">
        {/* Top navigation */}
        <div className="flex justify-between items-center mb-8">
          <img src={Logo} alt="Logo"/>
          <ul className="flex space-x-6 text-gray-500 text-sm">
            <li className="cursor-pointer hover:text-[hsl(5,_85%,_63%)]">Home</li>
            <li className="cursor-pointer hover:text-[hsl(5,_85%,_63%)]">New</li>
            <li className="cursor-pointer hover:text-[hsl(5,_85%,_63%)]">Popular</li>
            <li className="cursor-pointer hover:text-[hsl(5,_85%,_63%)]">Trending</li>
            <li className="cursor-pointer hover:text-[hsl(5,_85%,_63%)]">Categories</li>
          </ul>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left side */}
          <div className="md:col-span-2">
            <img
              src={MainWeb}
              alt="web3"
              className="w-[650px] h-[250px] rounded-md mb-6"
            />

            <div className="flex flex-col md:flex-row ">
                <h2 className="text-6xl font-bold mb-0 md:w-1/2">The Bright Future of Web 3.0?</h2>

                <div className="md:w-1/2">
                    <p className="text-gray-600 mb-6 pl-0">
                        We dive into the next evolution of the web that claims to put the
                        power of the platforms back into the hands of the people. But is it
                        really fulfilling its promise?
                    </p>
                    <button className="bg-red-500 text-black px-5 py-2 uppercase tracking-widest text-sm hover:bg-red-600">
                        Read More
                    </button>
                </div>
            </div>
            
          </div>

          {/* Right side (New section) */}
          <div className="bg-[hsl(240,_100%,_5%)] text-white p-6">
            <h1 className="text-[hsl(35,_77%,_62%)] text-4xl mb-6">New</h1>
            <div className="border-b border-gray-700 pb-4 mb-4">
              <h4 className="font-bold text mb-1 ">Hydrogen VS Electric Cars</h4>
              <p className="text-sm text-gray-400 mb-3">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="border-b border-gray-700 pb-4 mb-4">
              <h4 className="font-bold mb-1 mt-6">The Downsides of AI Artistry</h4>
              <p className="text-sm text-gray-400 mb-3">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-1 mt-6">Is VC Funding Drying Up?</h4>
              <p className="text-sm text-gray-400 ">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex space-x-4">
            <img
              src={imageOne}
              alt="retro"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <p className="text-[hsl(5,_85%,_63%)] text-xl font-bold">01</p>
              <h5 className="font-bold">Reviving Retro PCs</h5>
              <p className="text-gray-600 text-sm">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <img
              src={imageTwo}
              alt="laptops"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <p className="text-[hsl(5,_85%,_63%)] text-xl font-bold">02</p>
              <h5 className="font-bold">Top 10 Laptops of 2022</h5>
              <p className="text-gray-600 text-sm">
                Our best picks for various needs and budgets.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <img
              src={imageThree}
              alt="gaming"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <p className="text-[hsl(5,_85%,_63%)] text-xl font-bold">03</p>
              <h5 className="font-bold">The Growth of Gaming</h5>
              <p className="text-gray-600 text-sm">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
