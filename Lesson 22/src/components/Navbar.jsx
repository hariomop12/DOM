import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MyApp
        </Link>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
            }
          >
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
