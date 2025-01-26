import { Product } from "@/types/product";

export async function fetchProducts(search: string = ""): Promise<Product[]> {
  let url = "";
  // check if search is empty string
  if (search === "") {
    url = `https://zhiriensam.pythonanywhere.com/products`;
  }
  else{
    url = `https://zhiriensam.pythonanywhere.com/products?search=${search}`;
  }
  const response = await fetch(
    url,
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
