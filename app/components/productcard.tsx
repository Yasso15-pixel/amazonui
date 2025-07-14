type Props = {
  title: string;
  price: string;
};

export default function ProductCard({ title, price }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-green-600 font-bold">{price}</p>
      <button className="mt-3 w-full bg-yellow-400 text-black py-1 rounded hover:bg-yellow-300">
        Add to Cart
      </button>
    </div>
  );
}
