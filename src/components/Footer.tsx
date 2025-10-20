import { Instagram, Facebook, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 pt-12 pb-6">
      <div className="w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2">
              <img
                src="/src/assets/logo2.jpg"
                alt="Dapur Buzzer Logo"
                className="w-12 h-12 object-contain rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                Dapur Buzzer Indonesia
              </h2>
              <p className="text-sm text-gray-400 leading-tight">
                Influencer & KOL Management Platform Indonesia
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition"
            >
              <Music2 className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Download App</h3>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg hover:opacity-80 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
                alt="App Store"
                className="w-5 h-5"
              />
              <span className="text-sm">App Store</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg hover:opacity-80 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-5 h-5"
              />
              <span className="text-sm">Google Play</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Find Us</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            PT. FHCreative Group Indonesia <br />
            Jakarta, Indonesia <br />
            info@dapurbuzzer.id
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        © 2025 <span className="font-semibold text-gray-300">Dapur Buzzer</span>{" "}
        Part of{" "}
        <span className="font-medium">PT. FHCreative Group Indonesia</span>.
      </div>
    </footer>
  );
}
