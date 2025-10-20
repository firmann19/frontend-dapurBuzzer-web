import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Lucy Juliana Wagey",
    role: "Influencer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Dapur Buzzer memiliki pelayanan yang sangat baik dan informasi yang sangat detail dalam menyampaikan brief. Semenjak bergabung dengan Dapur Buzzer, saya kebanjiran endorse dan paid promote!",
  },
  {
    id: 2,
    name: "Rizky Maulana",
    role: "Content Creator",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 5,
    text: "Sistem kerjasamanya sangat profesional, komunikatif, dan transparan. Dapur Buzzer membantu saya mendapatkan banyak peluang brand campaign setiap bulan.",
  },
  {
    id: 3,
    name: "Amelia Putri",
    role: "Beauty Influencer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
    text: "Tim Dapur Buzzer sangat suportif dan mudah diajak kerja sama. Brief selalu jelas, pembayaran cepat, dan komunikasi lancar. Sangat direkomendasikan!",
  },
];

export default function Review() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[current];

  return (
    <section className="bg-gray-50 py-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-left text-2xl font-semibold text-gray-800 mb-12">
          Apa kata mereka tentang{" "}
          <span className="text-purple-700">Dapur Buzzer?</span>
        </h2>

        <div className="relative h-[300px] md:h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start p-8 gap-6 absolute inset-0"
            >
              <div className="flex-shrink-0">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-xl object-cover shadow-md"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-2">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{review.role}</p>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {review.text}
                </p>

                <div className="flex justify-center md:justify-end mt-4">
                  <Quote className="w-8 h-8 text-purple-700" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-purple-700 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
