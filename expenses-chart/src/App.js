import React from 'react';
import BalanceCard from './components/BalanceCard';
import SpendingChart from './components/SpendingChart';

function App() {
  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-4">
      <div className="bg-orange-50 p-6 rounded-xl w-full max-w-md space-y-4">
        <BalanceCard />
        <SpendingChart />
      </div>
    </div>
  );
}

export default App;
