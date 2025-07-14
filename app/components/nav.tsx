export default function Nav() {
  const categories = ["All", "Today's Deals", "Prime", "Electronics", "Books", "Fashion", "Toys", "Home"];
  return (
    <nav className="bg-[#232F3E] text-white text-sm px-6 py-2 flex space-x-4 overflow-x-auto">
      {categories.map((cat, i) => (
        <span key={i} className="cursor-pointer whitespace-nowrap hover:underline">
          {cat}
        </span>
      ))}
    </nav>
  );
}
