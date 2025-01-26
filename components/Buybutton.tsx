"use client"
import { redirect } from "next/navigation";

// Footer Component
export function BuyButton(props: { productId: number }) {
  const { productId } = props;
  const handleBuyClick = () => {
    redirect(`/purchase/${productId}`); // Redirect to the purchase page
  };
  return (
    <button
      onClick={handleBuyClick}
      className="bg-gradient-to-r from-gray-500 to-gray-900 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transform transition"
    >
      Tkhawar Now
    </button>
  );
}
