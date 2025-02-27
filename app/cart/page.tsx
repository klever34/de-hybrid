"use client";

import { FC, useContext } from "react";
import Image from "next/image";
import AppContext from "@context/AppContext";
import { useRouter } from "next/navigation";

const Cart: FC = () => {
  const { data, setGlobalState } = useContext(AppContext);
  const { cart } = data;
  const router = useRouter();

  const deliveryFee = 2000;

  const handleQuantityChange = (bookId: string, delta: number) => {
    setGlobalState((prevState) => {
      const updatedCart = prevState.cart.book.map((item) =>
        item.id === bookId
          ? { ...item, quantity: Math.max(1, (item.quantity ?? 1) + delta) }
          : item
      );

      const updatedTotalAmount = updatedCart.reduce(
        (sum, item) => sum + item.price * (item.quantity ?? 1),
        0
      );

      return {
        ...prevState,
        cart: {
          book: updatedCart,
          totalAmount: updatedTotalAmount,
          totalCount: updatedCart.reduce(
            (count, item) => count + (item.quantity ?? 1),
            0
          ),
        },
      };
    });
  };

  const handleRemoveItem = (bookId: string) => {
    setGlobalState((prevState) => {
      const updatedCart = prevState.cart.book.filter(
        (item) => item.id !== bookId
      );
      const updatedTotalAmount = updatedCart.reduce(
        (sum, item) => sum + item.price * (item.quantity ?? 1),
        0
      );

      return {
        ...prevState,
        cart: {
          book: updatedCart,
          totalAmount: updatedTotalAmount,
          totalCount: updatedCart.reduce(
            (count, item) => count + (item.quantity ?? 1),
            0
          ),
        },
      };
    });
  };

  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">CART</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            {cart.book.length === 0 ? (
              <p className="text-center text-gray-400">Your cart is empty.</p>
            ) : (
              cart.book.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-900 p-4 rounded-lg flex items-center gap-4"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-gray-400">{item.artist}</p>
                    <p className="text-orange-500 font-bold mt-2">
                      ₦{item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="bg-gray-700 text-white px-3 py-1 rounded"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="text-white">{item.quantity ?? 1}</span>
                      <button
                        className="bg-gray-700 text-white px-3 py-1 rounded"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                      <button
                        className="text-red-500 ml-4"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
            <p className="flex justify-between text-gray-400">
              <span>Sub Total</span>
              <span>₦{cart.totalAmount.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-gray-400">
              <span>Delivery</span>
              <span>₦{deliveryFee.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-orange-500 font-bold text-lg mt-2">
              <span>Total</span>
              <span>₦{(cart.totalAmount + deliveryFee).toFixed(2)}</span>
            </p>
            <button
              className="bg-orange-500 text-white w-full py-2 rounded-lg mt-4 hover:bg-orange-600"
              onClick={() => router.push("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
