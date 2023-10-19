import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = (
    <>
    <ul className="lg:flex lg:gap-3">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addproduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/about">My Cart</NavLink>
      </li>
    </ul>
  </>
    );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-16 h-16 rounded-full" src="https://i.ibb.co/HrntVPr/logo.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <img className="w-12 h-12 rounded-full pr-[6px]" src="https://i.ibb.co/x3RPF21/icon.png" alt="" />
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;