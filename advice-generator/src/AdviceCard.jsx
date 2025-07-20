import React from "react";
import MyIcon from './assets/icon-dice.svg';
import MyLine from './assets/pattern-divider-desktop.svg'

const AdviceCard = () => {
  return (
    <div className="min-h-screen bg-[hsl(218,_23%,_16%)] flex items-center justify-center px-4">
      <div className="bg-[hsl(217,_19%,_24%)] rounded-lg p-8 max-w-md text-center text-white shadow-lg relative h-[300px]">
        <p className="text-[hsl(150,_100%,_66%)] text-xs tracking-widest mb-4">ADVICE <span className="text-[hsl(150,_100%,_66%)]">#117</span></p>
        <p className="text-[28px] font-semibold mb-6 text-[hsl(193,_38%,_86%)]">
          “It is easy to sit up and take notice, what’s difficult is getting up and taking action.”
        </p>
        <img src={MyLine} alt="divider" className="mx-auto mb-6" />
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] bg-[hsl(150,_100%,_66%)] p-3 rounded-full cursor-pointer hover:bg-green-500 transition">
          <img src={MyIcon} alt="icon" className="w-6 h-6 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default AdviceCard;
