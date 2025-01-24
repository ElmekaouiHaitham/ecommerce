// Navigation Bar Component
export function NavBar() {
  return (
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
  );
}
