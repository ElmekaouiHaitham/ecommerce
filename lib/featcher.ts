import { Product } from "@/types/product";

export async function fetchProducts(): Promise<Product[]> {
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

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data: Promise<Product[]> = response.json();
  return data;
}

export async function fetchProduct(id: number): Promise<Product> {
  const response = await fetch(
    `https://zhiriensam.pythonanywhere.com/products/${id}`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data: Promise<Product> = response.json();
  return data;
}
