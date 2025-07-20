import React from 'react';
import icon from '../assets/logo.svg'

function BalanceCard() {
  return (
    <div className="bg-[hsl(10,_79%,_65%)] rounded-xl text-white p-6 flex items-center justify-between">
      <div>
        <p className="text-sm">My balance</p>
        <p className="text-2xl font-bold">$921.48</p>
      </div>
      <img src={icon} alt='icon' className="w-10 h-10 object-contain"/>
    </div>
  );
}

export default BalanceCard;