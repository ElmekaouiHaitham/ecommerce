import { Product } from "@/types/product";

// Product Card Component
export function ProductCard({ product }: { product: Product; }) {
  return (
    <div
      key={product.id}
      className="bg-white shadow-lg rounded-xl p-6 transform hover:scale-105 transition duration-300 ease-in-out"
    >
      <img
        src={product.image_url}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        {product.title}
      </h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </span>
        <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}
