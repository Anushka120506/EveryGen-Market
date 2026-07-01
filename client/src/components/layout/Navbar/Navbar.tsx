import { Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiSearch,
  FiUser,
  FiMenu,
} from "react-icons/fi";

import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Button from "../../common/Button/Button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">

            <Link
              to="/"
              className="font-medium hover:text-emerald-600"
            >
              Home
            </Link>

            <Link
              to="/shop"
              className="font-medium hover:text-emerald-600"
            >
              Shop
            </Link>

            <a href="#" className="font-medium hover:text-emerald-600">
              Categories
            </a>

            <a href="#" className="font-medium hover:text-emerald-600">
              About
            </a>

            <a href="#" className="font-medium hover:text-emerald-600">
              Contact
            </a>

          </nav>

          <div className="hidden w-72 items-center rounded-xl border border-slate-200 px-3 py-2 lg:flex">

            <FiSearch className="mr-2 text-slate-500" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent outline-none"
            />

          </div>

          <div className="flex items-center gap-4">

            <button className="hidden lg:block">
              <FiUser size={22} />
            </button>

            <button className="relative">
              <FiShoppingCart size={22} />

              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs text-white">
                0
              </span>

            </button>

            <div className="hidden lg:block">
              <Button>Login</Button>
            </div>

            <button className="lg:hidden">
              <FiMenu size={24} />
            </button>

          </div>

        </div>
      </Container>
    </header>
  );
};

export default Navbar;