import { motion } from "framer-motion";

const clients = [
  {
    name: "DANA",
    logo: "https://logo.clearbit.com/dana.id",
  },
  {
    name: "Shopee",
    logo: "https://logo.clearbit.com/shopee.co.id",
  },
  {
    name: "Gojek",
    logo: "https://logo.clearbit.com/gojek.com",
  },
  {
    name: "MS Glow",
    logo: "https://ingredio.id/wp-content/uploads/2022/06/Logo-MS-Glow.png",
  },
];

export default function OurClient() {
  return (
    <section className="mt-12 py-10 bg-gray-50 rounded-3xl">
      <div className="w-full mx-auto text-left">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10">
          Klien Kami
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-center gap-8 md:gap-12 px-6 md:px-12">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex justify-center"
            >
              <motion.img
                src={client.logo}
                alt={client.name}
                title={client.name}
                className="h-10 md:h-14 object-contain hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
