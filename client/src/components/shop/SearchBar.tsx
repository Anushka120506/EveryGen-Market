import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({
  searchTerm,
  onSearchChange,
}: SearchBarProps) => {
  return (
    <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-md">

      <FiSearch className="mr-3 text-2xl text-slate-500" />

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search products..."
        className="w-full bg-transparent text-lg outline-none"
      />

    </div>
  );
};

export default SearchBar;