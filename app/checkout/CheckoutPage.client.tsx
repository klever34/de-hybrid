"use client";

import { FC, useContext, useState } from "react";

import { useRouter } from "next/navigation";
import AppContext from "@context/AppContext";
import { formatToNaira } from "@/utils/types/books";
import { usePaystackPayment } from "react-paystack";

type PaystackReferenceResponse = {
  message: string;
  redirecturl: string;
  reference: string;
  status: string;
  trans: string;
  transaction: string;
  trxref: string;
};

const Checkout: FC = () => {
  const { data } = useContext(AppContext);
  const { cart } = data;
  const router = useRouter();

  const deliveryFee = 2000;
  const totalAmount = cart.totalAmount + deliveryFee;

  // Form State
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    address: "",
  });

  const initializePayment = usePaystackPayment({
    reference: new Date().getTime().toString(),
    email: form?.email,
    amount: totalAmount * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSuccess = () => async (reference: PaystackReferenceResponse) => {
    if (reference.status === "success") {
      alert(`Payment was successful`);
    } else {
      alert(`Payment was unsuccessful`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout Data:", form);

    initializePayment({ onSuccess: onSuccess(), onClose });
  };

  const onClose = () => {};

  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">CHECKOUT</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="md:col-span-2 bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">
              Fill your details carefully
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="p-3 bg-gray-800 text-white rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="p-3 bg-gray-800 text-white rounded w-full"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className="p-3 bg-gray-800 text-white rounded w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="p-3 bg-gray-800 text-white rounded w-full"
                  required
                />
              </div>

              <h3 className="text-lg font-bold mt-6">Address</h3>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="address"
                  placeholder="Residential address"
                  value={form.address}
                  onChange={handleChange}
                  className="p-3 bg-gray-800 text-white rounded w-full"
                  required
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                  className="p-3 bg-gray-800 text-white rounded w-full"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={form.state}
                  onChange={handleChange}
                  className="p-3 bg-gray-800 text-white rounded w-full"
                  required
                />
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
                  onClick={() => router.push("/cart")}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
                >
                  Make Payment
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
            <p className="flex justify-between text-gray-400">
              <span>Sub Total</span>
              <span>{formatToNaira(cart.totalAmount)}</span>
            </p>
            <p className="flex justify-between text-gray-400">
              <span>Delivery</span>
              <span>{formatToNaira(deliveryFee)}</span>
            </p>
            <p className="flex justify-between text-orange-500 font-bold text-lg mt-2">
              <span>Total</span>
              <span>{formatToNaira(totalAmount)}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
