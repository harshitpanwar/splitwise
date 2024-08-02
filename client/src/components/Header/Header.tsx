import { FormEvent, useState } from "react";
import HeaderDropdown from "./HeaderDropdown"

type Props = {userName: string}

const Header = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleDropdown(event: FormEvent<HTMLSpanElement>): void {
    event.preventDefault();
    setIsVisible(!isVisible);
  }
  
  return (
    <nav className="bg-green-400 p-1 border-solid border-l-indigo-800 px-96">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-lg text-white font-semibold">Expense Tracking App</span>
        <span className="text-sm text-white cursor-pointer" onClick={toggleDropdown}>{props.userName}</span>
      </div>
      {isVisible && <HeaderDropdown />}
    </nav>
  );
};

export default Header