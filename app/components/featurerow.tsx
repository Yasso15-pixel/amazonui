const features = [
  {
    title: "Enjoy Prime on us",
    image: "https://via.placeholder.com/250x150?text=Prime",
  },
  {
    title: "What's trending?",
    image: "https://via.placeholder.com/250x150?text=Deals",
  },
  {
    title: "Flash Deals",
    image: "https://via.placeholder.com/250x150?text=Flash+Deals",
  },
  {
    title: "Makeup | New arrivals",
    image: "https://via.placeholder.com/250x150?text=Makeup",
  },
];

export default function FeatureRow() {
  return (
    <div className="bg-blue-300 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {features.map((f, i) => (
        <div key={i} className="bg-white rounded shadow p-4">
          <h2 className="font-semibold mb-2">{f.title}</h2>
          <img src={f.image} alt={f.title} className="w-full h-32 object-cover rounded" />
        </div>
      ))}
    </div>
  );
}
