import { FiShoppingCart, FiSearch, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-emerald-600">
            EveryGen Market
          </h1>

          <p className="text-xs text-gray-500">
            Shopping Made Simple for Every Generation.
          </p>
        </div>

        {/* Search */}
        <div className="hidden w-[420px] items-center rounded-lg border border-gray-300 px-3 py-2 lg:flex">
          <FiSearch className="mr-2 text-gray-500" />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full outline-none"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2 text-white transition hover:bg-emerald-700">
            <FiUser />
            Login
          </button>

          <button className="relative">
            <FiShoppingCart
              size={25}
              className="text-gray-700"
            />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              0
            </span>
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;