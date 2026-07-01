import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="min-h-screen bg-slate-100 py-12">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-slate-900">
            🛒 Shopping Cart
          </h1>

          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white hover:bg-red-600"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-lg">

            <h2 className="text-3xl font-bold text-slate-800">
              Your Cart is Empty
            </h2>

            <p className="mt-4 text-slate-500">
              Looks like you haven't added any products yet.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-block rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white hover:bg-emerald-700"
            >
              Continue Shopping
            </Link>

          </div>
        ) : (
          <>
            <div className="space-y-6">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-white p-6 shadow-lg md:flex-row"
                >

                  <div className="flex items-center gap-6">

                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-slate-100 text-6xl">
                      {item.image}
                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-slate-500">
                        ₹{item.price}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="h-10 w-10 rounded-full bg-slate-200 text-xl font-bold"
                    >
                      -
                    </button>

                    <span className="text-xl font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="h-10 w-10 rounded-full bg-emerald-600 text-xl font-bold text-white"
                    >
                      +
                    </button>

                  </div>

                  <div className="text-center">

                    <p className="text-2xl font-bold text-emerald-600">
                      ₹{item.price * item.quantity}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-3 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

            <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

              <div className="flex items-center justify-between">

                <h2 className="text-3xl font-bold">
                  Total
                </h2>

                <h2 className="text-4xl font-bold text-emerald-600">
                  ₹{total}
                </h2>

              </div>

              <div className="mt-8 flex flex-col gap-4 md:flex-row">

                <Link
                  to="/shop"
                  className="flex-1 rounded-xl border border-emerald-600 py-4 text-center font-semibold text-emerald-600 hover:bg-emerald-50"
                >
                  Continue Shopping
                </Link>

                <button className="flex-1 rounded-xl bg-emerald-600 py-4 font-semibold text-white hover:bg-emerald-700">
                  Proceed to Checkout
                </button>

              </div>

            </div>

          </>
        )}

      </div>
    </section>
  );
};

export default CartPage;