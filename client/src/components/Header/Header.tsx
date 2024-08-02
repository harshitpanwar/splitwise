type Props = {userName: string}

const Header = (props: Props) => {
  return (
    <nav className="bg-green-400 p-1 border-solid border-l-indigo-800 px-96">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-lg text-white font-semibold">Expense Tracking App</span>
        <span className="text-sm text-white cursor-pointer">{props.userName}</span>
      </div>
    </nav>
  );
};

export default Header