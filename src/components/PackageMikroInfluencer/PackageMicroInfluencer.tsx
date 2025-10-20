import PackageCard from "./PackageCard";

export default function PackageMicroInfluencer() {
  const packages = [
    {
      title: "Paket Endorsement 10 Micro Influencer",
      price: "Rp 2.500.000",
      image: "/src/assets/package-endorsement.jpg",
    },
    {
      title: "Paket Paid Promote 10 Micro Influencer",
      price: "Rp 1.500.000",
      image: "/src/assets/package-paid-promote.jpg",
    },
    {
      title: "Paket Produk Review 10 Micro Influencer",
      price: "Rp 2.000.000",
      image: "/src/assets/package-produk-review.jpg",
    },
  ];

  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Package Micro Influencer
        </h2>
        <a
          href="#"
          className="text-purple-600 text-sm font-medium hover:underline"
        >
          Lihat Lebih Banyak →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </section>
  );
}
