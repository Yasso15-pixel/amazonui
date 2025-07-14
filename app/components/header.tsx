import { ShoppingCart, MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#131921] text-white p-3 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <div className="text-xl font-bold">Amazon UI</div>
        <div className="text-xs">
          <p className="text-gray-300">Deliver to</p>
          <div className="flex items-center gap-1">
            <MapPin size={14} /> <p className="font-bold">Egypt</p>
          </div>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search Amazon"
        className="flex-1 mx-4 p-2 rounded text-black bg-white"
      />
      <ShoppingCart />
    </header>
  );
}
