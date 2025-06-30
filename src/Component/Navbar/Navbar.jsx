import { FiArrowUpRight } from "react-icons/fi";
import logo from "../../assets/img/logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navItems = [
    { name: "Services", path: "/services" },
    { name: "Coverage", path: "/coverage" },
    { name: "About Us", path: "/about" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav className="container mx-auto my-5 px-4 py-6 flex items-center justify-between bg-slate-100 rounded-2xl">
      <Link to="/" className="flex items-end gap-2">
        <img src={logo} alt="Profast Logo" className="w-8 h-full -mr-4" />
        <span className="text-2xl font-extrabold">ZapShift</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <NavLink key={item.name} to={item.path} className=" font-semibold">
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:flex items-center lg:gap-4 gap-2">
        <Link to="/sign-in">
          {" "}
          <button className="btn btn-outline rounded-full">Sign In</button>{" "}
        </Link>
        <Link to="/be-a-rider">
          <button className="btn  rounded-full bg-lime-500 flex items-center gap-2 text-white ">
            Be a rider{" "}
          </button>
        </Link>
        <div className="bg-black rounded-full p-2 text-white text-2xl -ml-3">
          {" "}
          <FiArrowUpRight />
        </div>
      </div>

      <div className="flex md:hidden dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-32 pl-4 shadow"
        >
          {navItems.map((item) => (
            <li key={item.name} className="my-2">
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
          <li className="my-2">
            {" "}
            <NavLink to="/be-a-rider"> Be a Rider</NavLink>
          </li>
          <li className="my-2">
            {" "}
            <NavLink to="/signin"> Sign in</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
