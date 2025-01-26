import { fetchProducts } from "@/lib/featcher";
import { Product } from "@/types/product";
import { ProductCard } from "../../components/ProductCard";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

// Home Component
export default async function Products() {
  let products: Product[] = [];
  try {
    products = await fetchProducts("");
  } catch (error) {
    console.error(
      "Error fetching products:",
      error instanceof Error ? error.message : error
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <div className="p-6 px-11">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products available at the moment.
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
