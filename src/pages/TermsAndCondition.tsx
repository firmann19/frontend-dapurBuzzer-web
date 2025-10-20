import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AboutUs() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col items-center text-center p-10 md:p-16">
        <img
          src="/logo.png"
          alt="Dapur Buzzer Logo"
          className="w-20 h-20 mb-6"
        />

        <h1 className="text-3xl font-bold text-gray-800">
          Dapur Buzzer Indonesia
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Influencer & KOL Management Platform Indonesia
        </p>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center gap-2 bg-purple-700 text-white text-sm font-semibold px-6 py-3 rounded-full mt-8 shadow-md hover:bg-purple-800 transition"
        >
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          <span>Apa itu Dapur Buzzer?</span>
        </button>

        {isOpen && (
          <p className="text-gray-600 mt-6 leading-relaxed text-base max-w-3xl transition-all duration-300">
            Dapur Buzzer Indonesia adalah sebuah platform yang menghubungkan
            brand yang kamu punya, mulai dari bisnis berskala kecil hingga
            besar, dengan influencer atau buzzer yang tepat untuk mempromosikan
            produk atau jasa kepada publik. Kami hadir untuk membantu brand kamu
            berkembang melalui kolaborasi digital yang strategis, efektif, dan
            berdampak nyata.
          </p>
        )}

        <div className="w-20 h-1 bg-purple-600 rounded-full my-10"></div>

        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-500 hover:text-purple-600 transition"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-purple-600 transition"
          >
            <i className="fab fa-tiktok text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-purple-600 transition"
          >
            <i className="fab fa-facebook text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
