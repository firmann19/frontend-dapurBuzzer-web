"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Banner() {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600880292089-90e8ee6c54b6?auto=format&fit=crop&w=1000&q=80",
      title: (
        <>
          Mau Dapat <br />
          Penghasilan dari <span className="text-[#F9C80E]">Sosial Media?</span>
        </>
      ),
      subtitle:
        "Join jadi Talent Dapur Buzzer & dapatkan penghasilan tambahan sekarang!",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80",
      title: (
        <>
          Kolaborasi <span className="text-[#F9C80E]">Brand</span> &{" "}
          <span className="text-[#F9C80E]">Influencer</span>
        </>
      ),
      subtitle:
        "Tingkatkan exposure produkmu bersama influencer profesional di Dapur Buzzer!",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80",
      title: (
        <>
          Solusi <span className="text-[#F9C80E]">Marketing Digital</span> Masa
          Kini
        </>
      ),
      subtitle:
        "Kami bantu brand kamu berkembang melalui strategi influencer marketing efektif.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[380px] md:h-[460px] rounded-2xl overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[current].id}
          src={slides[current].image}
          alt="Banner Slide"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/90 via-purple-700/70 to-transparent"></div>

      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 text-white max-w-2xl">
        <motion.h1
          key={slides[current].id + "-title"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold leading-snug"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={slides[current].id + "-subtitle"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-sm md:text-lg max-w-md text-purple-100"
        >
          {slides[current].subtitle}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 w-fit bg-white text-purple-700 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-purple-50 transition"
        >
          Klik Disini
        </motion.button>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
