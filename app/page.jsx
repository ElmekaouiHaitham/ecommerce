import Image from "next/image";

export default async function Home() {
  const fetchProducts = async () => {
    const response = await fetch(
      "https://zhiriensam.pythonanywhere.com/products",
      {
        method: "GET",
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      }
    );
    return response.json();
  };
  const products = await fetchProducts();
  //   const products = [
  //     {
  //       id: 1,
  //       title: "Wireless Headphones",
  //       description: "Experience immersive sound with our premium wireless headphones.",
  //       price: 149.99,
  //       image_url: "https://via.placeholder.com/150",
  //     },
  //     {
  //       id: 2,
  //       title: "Smartwatch",
  //       description: "Track your health and stay connected on the go.",
  //       price: 199.99,
  //       image_url: "https://via.placeholder.com/150",
  //     },
  //     {
  //       id: 3,
  //       title: "Gaming Laptop",
  //       description: "Powerful laptop with high-performance specs for gamers.",
  //       price: 1299.99,
  //       image_url: "https://via.placeholder.com/150",
  //     },
  //     {
  //       id: 4,
  //       title: "Bluetooth Speaker",
  //       description: "Portable speaker with deep bass and crystal-clear audio.",
  //       price: 89.99,
  //       image_url: "https://via.placeholder.com/150",
  //     },
  //   ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Navigation Bar */}
      <header className="bg-gray-900 text-white shadow-md px-10">
        <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <div className="text-2xl font-semibold">Zhiri</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="hover:text-blue-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-blue-300">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-300">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-6 px-11">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-xl p-6 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={product.image_url}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
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
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-12">
        <div className="text-center">
          <p>&copy; 2025 Zhiri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
