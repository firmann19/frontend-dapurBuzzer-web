import { Link } from "react-router-dom";
import { Search, Home, Users, Zap, Gift, Info } from "lucide-react";

export default function Navbar() {
  const menuItems = [
    { label: "Home", icon: Home, path: "/" },
    { label: "Influencer", icon: Users, path: "/influencer" },
    { label: "Campaign", icon: Zap, path: "/campaign" },
    { label: "Package", icon: Gift, path: "/package" },
    { label: "About", icon: Info, path: "/about-us" },
  ];

  return (
    <nav className="w-full bg-purple-700 text-white shadow-md sticky top-0 z-50">
      <div className="w-full px-6 md:px-12 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 font-semibold text-lg">
          <img
            src="/assets/logo.png"
            alt="Dapur Buzzer"
            className="w-32 h-18"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={item.path}
                className="flex items-center gap-2 hover:text-purple-200 transition"
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="relative w-60 hidden md:block">
          <Search
            className="absolute left-3 top-2.5 text-purple-600"
            size={18}
          />
          <input
            type="text"
            placeholder="Cari influencer..."
            className="w-full pl-9 pr-3 py-2 rounded-full bg-white/90 text-gray-800 placeholder:text-gray-500 border border-purple-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all"
          />
        </div>
      </div>
    </nav>
  );
}
