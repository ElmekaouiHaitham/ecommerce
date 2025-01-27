"use client";
import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";

// Navigation Bar Component
export function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    redirect(`/products?search=${searchTerm}`);
  };
  return (
    <header className="bg-gray-900 text-white shadow-md px-3 md:px-16">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        {/* Logo or Branding */}
        <div className="text-2xl font-semibold">Zhiri</div>

        {/* Search Bar */}
        <div className="relative">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-800  text-white rounded-lg px-4 py-2 pla  ceholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:block">
          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-blue-300" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-300" passHref>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-300" passHref>
                  about
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
