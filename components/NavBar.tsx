import Link from "next/link";

// Navigation Bar Component
export function NavBar() {
  return (
    <header className="bg-gray-900 text-white shadow-md px-10">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">Zhiri</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" passHref>
                <a className="hover:text-blue-300">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a className="hover:text-blue-300">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a className="hover:text-blue-300">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a className="hover:text-blue-300">Products</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
