import { navLinks } from "./config";
import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white text-white">
      <header className="bg-gray-800 px-8 py-4 shadow-md">
        <nav className="flex items-center justify-between max-w-5xl mx-auto">
          <h1 className="text-xl font-bold text-yellow-400">BookingApp</h1>

          <ul className="flex gap-6">
            {navLinks.map(({ name, to }) => (
              <li key={name}>
                <NavLink
                  to={to}
                  end
                  className={({ isActive }) =>
                    clsx(
                      "text-white-900 hover:text-yellow-400 transition-colors",
                      isActive && "text-yellow-400",
                    )
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              clsx(
                "text-white-900 hover:text-yellow-400 transition-colors",
                isActive && "text-yellow-400",
              )
            }
          >
            Favorite
          </NavLink>
        </nav>
      </header>

      <main className="px-6 py-10 max-w-5xl mx-auto">
        <Outlet />
      </main>

      <footer className="text-gray-700 text-center py-6 mt-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} BookingApp. All rights reserved.
          </p>
          <p className="text-sm mt-1">Made with 💛 by Anna</p>

          <nav className="mt-3">
            <NavLink
              to="/contacts"
              className="text-gray-800 text-xl hover:underline"
            >
              Contact Support
            </NavLink>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
