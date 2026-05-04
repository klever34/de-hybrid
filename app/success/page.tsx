"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { FaCheckCircle } from "react-icons/fa";

const SuccessContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const firstName = searchParams.get("firstName") ?? "";
  const total = searchParams.get("total") ?? "";
  const reference = searchParams.get("reference") ?? "";

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-24">
      <div className="max-w-lg w-full bg-gray-900 rounded-2xl p-10 text-center shadow-lg">
        <FaCheckCircle className="text-orange-500 mx-auto mb-6" size={72} />

        <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
        <p className="text-gray-400 mb-6">
          Thank you{firstName ? `, ${firstName}` : ""}! Your order has been placed.
        </p>

        {(total || reference) && (
          <div className="bg-gray-800 rounded-lg p-4 mb-8 text-left space-y-3">
            {total && (
              <div className="flex justify-between">
                <span className="text-gray-400">Amount paid</span>
                <span className="font-bold text-orange-500">{total}</span>
              </div>
            )}
            {reference && (
              <div className="flex justify-between">
                <span className="text-gray-400">Reference</span>
                <span className="font-mono text-sm text-gray-300 truncate ml-4">
                  {reference}
                </span>
              </div>
            )}
          </div>
        )}

        <p className="text-gray-400 text-sm mb-8">
          A confirmation email has been sent to you. We&apos;ll be in touch shortly
          with your delivery details.
        </p>

        <button
          onClick={() => router.push("/home")}
          className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition font-semibold"
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

const SuccessPage = () => {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
};

export default SuccessPage;
