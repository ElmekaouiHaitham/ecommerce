"use client";
import { useRouter } from "next/navigation"; // Import useRouter

import { Product } from "@/types/product";

// Footer Component
export function PurchaseButton(props: { product: Product }) {
  const { product } = props;
  const router = useRouter(); // Initialize router

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget); // Get form data
    const name = formData.get("name");
    const phone = formData.get("phone");
    const messageBody = `the business is going,\nthe user: ${name}\nphone number: ${phone}\n tkhawar meana wchra l produit l khari: ${product.title}`;

    // Send SMS using Twilio
    try {
      const TWILIO_ACCOUNT_SID = "ACfd18530aaf85463b89de2ee3d8f1de44";
      const TWILIO_AUTH_TOKEN = "5d69872d0e6fa639744be5c5665fd1d0";
      const TWILIO_MESSAGING_SERVICE_SID = "MG172b4c02f40e7b5df24d4ca5f3e3bca1";
      const response = await fetch(
        "https://api.twilio.com/2010-04-01/Accounts/" +
          TWILIO_ACCOUNT_SID +
          "/Messages.json",
        {
          method: "POST",
          headers: {
            Authorization:
              "Basic " +
              Buffer.from(
                `${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`
              ).toString("base64"),
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            To: "+212688007649", // receiver's phone number
            Body: messageBody,
            MessagingServiceSid: TWILIO_MESSAGING_SERVICE_SID,
          }),
        }
      );

      if (response.ok) {
        alert("Purchase successful! Sending SMS confirmation...");
        router.push("/products"); // Navigate to products page
      } else {
        alert("Failed to complete purchase1: " + response.status);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to complete purchase2: " + error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Complete Your Purchase
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              pattern="[0-9]{10}"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-500 to-gray-900 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transform transition"
          >
            Confirm Purchase
          </button>
        </form>
      </div>
    </div>
  );
}
