import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { PurchaseButton } from "@/components/PurchaseForum";
import { fetchProduct } from "@/lib/featcher";

export default async function PurchasePage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  let { productId } = await params;
  productId = decodeURIComponent(productId);
  const product = await fetchProduct(+productId); // Fetch product

  return (
    <div className="container bg-gray-50">
      <NavBar />
      <PurchaseButton product={product} />
      <Footer />
    </div>
  );
}
