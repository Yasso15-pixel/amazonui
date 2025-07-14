import Header from "./components/header";
import Nav from "./components/nav";
import HeroBanner from "./components/herobanner";
import FeatureRow from "./components/featurerow";
import ProductCard from "./components/productcard";

const products = [
  { title: "Wireless Headphones", price: "$39.99" },
  { title: "Smart Watch", price: "$59.99" },
  { title: "Gaming Keyboard", price: "$49.99" },
  { title: "Bluetooth Speaker", price: "$29.99" },
  { title: "Laptop Stand", price: "$19.99" },
  { title: "USB-C Charger", price: "$14.99" },
];

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Nav />
      <HeroBanner />
      <FeatureRow />

      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} title={product.title} price={product.price} />
        ))}
      </main>
    </div>
  );
}
