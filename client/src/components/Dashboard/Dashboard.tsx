type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold mb-4">Expense Dashboard</h1>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md mr-2">
          Add Expense
        </button>
        <button className="bg-green-400 text-white px-4 py-2 rounded-md">
          Settle Up
        </button>
      </div>
    </div>
  )
}

export default Dashboard