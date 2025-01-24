import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { fetchProduct } from "@/lib/featcher";

type Props = {
  params: {
    productId: string;
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = decodeURIComponent(params.productId);

  const product = await fetchProduct(+productId); // Fetch product

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <div className="max-w-5xl mx-auto p-6 md:p-12">
        {/* Product Image and Details Section */}
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src={product.image_url}
              alt={product.title}
              className="w-full h-full object-cover md:rounded-l-lg"
            />
          </div>

          {/* Product Details */}
          <div className="p-6 md:p-10 md:w-1/2 flex flex-col justify-between">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {product.description}
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              <button className="bg-gradient-to-r from-gray-500 to-gray-900 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transform transition">
                Tkhawar Now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-10">
          {/* Product Specifications */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Product Specifications
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>High-quality materials</li>
              <li>Dimensions: 20x15x10 cm</li>
              <li>Weight: 1.5 kg</li>
              <li>Manufacturer: XYZ Corp</li>
            </ul>
          </section>

          {/* Customer Reviews */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Customer Reviews
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-gray-600 italic">
                  Amazing product! Highly recommend.
                </p>
                <p className="text-gray-800 font-semibold mt-2">- John Doe</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-gray-600 italic">
                  Great value for money. Will buy again.
                </p>
                <p className="text-gray-800 font-semibold mt-2">- Jane Smith</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
