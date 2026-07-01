interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterBar = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: FilterBarProps) => {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
            selectedCategory === category
              ? "bg-emerald-600 text-white shadow-lg"
              : "bg-white text-slate-700 shadow hover:bg-emerald-50"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;