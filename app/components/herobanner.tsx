export default function HeroBanner() {
  return (
    <div className="relative bg-yellow-300 overflow-hidden">
      <div className="absolute w-full bottom-0">
        <svg
          viewBox="0 0 1440 150"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path fill="#60a5fa" d="M0,0 C720,150 720,150 1440,0 L1440,150 L0,150 Z" />
        </svg>
      </div>

      <div className="p-6 md:p-12 flex items-center justify-between flex-wrap z-10 relative">
        <h1 className="text-3xl font-bold text-black">Everything Summer</h1>
        <p className="text-sm text-black flex items-center gap-1">
          🚚 Free delivery <span className="text-xs">*T&Cs apply</span>
        </p>
      </div>
    </div>
  );
}
