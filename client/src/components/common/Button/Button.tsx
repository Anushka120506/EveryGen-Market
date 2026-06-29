import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white transition-all duration-300 hover:bg-emerald-700"
    >
      {children}
    </button>
  );
};

export default Button;