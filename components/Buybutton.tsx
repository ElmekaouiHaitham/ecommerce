"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// Footer Component
export function BuyButton(props: { productId: number }) {
  const { productId } = props;
  const router = useRouter(); // Initialize the router
  const [loading, setLoading] = useState(false);

  const handleBuyClick = () => {
    setLoading(true);
    router.push(`/purchase/${productId}`); // Client-side navigation
  };

  return (
    <button
      onClick={handleBuyClick}
      disabled={loading}
      className="bg-gradient-to-r from-gray-500 to-gray-900 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transform transition"
    >
      {loading ? "Loading..." : "Tkhawar Now"}
    </button>
  );
}
