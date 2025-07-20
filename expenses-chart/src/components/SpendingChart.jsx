import React from 'react';

const data = [
  { day: 'mon', amount: 17.45 },
  { day: 'tue', amount: 34.91 },
  { day: 'wed', amount: 52.36 },
  { day: 'thu', amount: 31.07 },
  { day: 'fri', amount: 23.39 },
  { day: 'sat', amount: 43.28 },
  { day: 'sun', amount: 25.48 },
];

export default function SpendingChart() {
  const max = Math.max(...data.map(d => d.amount));

  return (
    <div className="bg-white rounded-xl p-6 shadow-inner">
      <p className="font-bold text-lg mb-4 text-gray-800">Spending - Last 7 days</p>
      <div className="flex justify-between items-stretch h-40 mb-6 ">
        {data.map((item, index) => {
          const percent = (item.amount / max) * 100;
          const height = `${percent}%`;
          const isWednesday = item.day === 'wed';
          const barColor = isWednesday ? 'bg-[hsl(186,_34%,_65%)]' : 'bg-[hsl(10,_79%,_65%)]';

    return(
        <div key={index} className="flex flex-col items-center w-10 ">
             <div className="flex items-end h-full w-full">
                <div
              className={`rounded-md ${barColor} w-full `}
              style={{ 
                height,
               }}
            ></div>
             </div>
            
            <span className="text-xs mt-1 text-gray-600">{item.day}</span>
          </div>
        )
    })}
      </div>
      <div className="border-t border-gray-200 pt-4 flex justify-between items-end">
        <div>
          <p className="text-sm text-gray-400">Total this month</p>
          <p className="text-2xl font-bold text-gray-800">$478.33</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-gray-800 text-sm">+2.4%</p>
          <p className="text-xs text-gray-400">from last month</p>
        </div>
      </div>
    </div>
  );
}
