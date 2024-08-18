import { useState } from "react";
import AddExpense from "../Modals/AddExpense";

const Dashboard = () => {
  const [showExpense, setShowExpense] = useState(false);

  function handleButtonClick(): void {
    setShowExpense(!showExpense);
  };
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white drop-shadow-2xl min-h-screen w-4/12">
        <div>
          <div className="bg-gray-200 grid grid-cols-2 rounded-t text-center">
            <div className="self-center p-2">
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex space-x-4 justify-end p-2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded" onClick={handleButtonClick}>Add Expense</button>
              <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded">Settle Up</button>
            </div>
          </div>
          <div className="bg-gray-200 grid grid-cols-3 gap-4 rounded-b text-center">
            <div className="p-2">
              <p className="text-xs font-semibold text-gray-500">Total Balance</p>
              <p className="">$500</p>
            </div>
            <div className="p-2 border-x-neutral-400 border-x">
              <p className="text-xs font-semibold text-gray-500">You Owe</p>
              <p className="text-red-500">-$200</p>
            </div>
            <div className="p-2">
              <p className="text-xs font-semibold text-gray-500">You Are Owed</p>
              <p className="text-green-500">$700</p>
            </div>
          </div>
        </div>
      </div>
      {showExpense && <AddExpense />}
    </div>
  );
};

export default Dashboard