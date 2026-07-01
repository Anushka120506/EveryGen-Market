import {
  FiHeart,
  FiShoppingCart,
  FiStar,
} from "react-icons/fi";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  onAddToCart: () => void;
}

const ProductCard = ({
  name,
  category,
  price,
  rating,
  image,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative flex h-52 items-center justify-center bg-slate-100">

        <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
          20% OFF
        </span>

        <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow">
          <FiHeart size={18} />
        </button>

        <div className="text-7xl">
          {image}
        </div>

      </div>

      <div className="p-6">

        <p className="text-sm text-slate-500">
          {category}
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {name}
        </h3>

        <div className="mt-3 flex items-center gap-2">

          <FiStar size={16} />

          <span>{rating}</span>

        </div>

        <div className="mt-5 flex items-center gap-3">

          <span className="text-3xl font-bold text-emerald-600">
            ₹{price}
          </span>

          <span className="text-slate-400 line-through">
            ₹{Math.round(price * 1.25)}
          </span>

        </div>

        <button
          onClick={onAddToCart}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          <FiShoppingCart size={18} />

          Add to Cart

        </button>

      </div>

    </div>
  );
};

export default ProductCard;