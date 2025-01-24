import Link from "next/link";

// Navigation Bar Component
export function NavBar() {
  return (
    <header className="bg-gray-900 text-white shadow-md px-16">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        {/* Logo or Branding */}
        <div className="text-2xl font-semibold">Zhiri</div>

        {/* Search Bar */}
        <div className="relative ">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-300" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-300" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-300" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-300" passHref>
                Home
              </Link>
            </li>
          </ul>


        </nav>
      </div>
    </header>
  );
}
