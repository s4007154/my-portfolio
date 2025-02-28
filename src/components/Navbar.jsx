import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-black/20 text-white text-xl font-bold w-full items-center h-1/12 px-12 py-6 grid grid-cols-3 ">
      <h1 className="font-semibold text-3xl col-span-1">Jessica Markoski</h1>
      <ul className="flex col-span-1 justify-between">
        <li>
          <NavLink> Home</NavLink>
        </li>
        <li>
          <NavLink> About Me </NavLink>
        </li>
        <li>
          <NavLink> My Projects </NavLink>
        </li>
      </ul>
      <button className="col-span-1 text-xl ml-auto bg-yellow-500 py-1 px-10 rounded-full">
        <NavLink> Contact Me </NavLink>
      </button>
    </nav>
  );
};

export default Navbar;
