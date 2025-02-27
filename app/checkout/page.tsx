"use client";

import dynamic from "next/dynamic";

const CheckoutPage = dynamic(() => import("./CheckoutPage.client"), {
  ssr: false,
});

const CheckoutWrapper = () => {
  return <CheckoutPage />;
};

export default CheckoutWrapper;
