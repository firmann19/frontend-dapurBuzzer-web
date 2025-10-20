import InfluencerCard from "./InfluencerCard";

export default function InfluencerRecomend() {
  const influencers = [
    {
      name: "Shelly Diah Putri",
      username: "shellyagustines",
      followers: "69.8K",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      category: "Beauty & Fashion",
    },
    {
      name: "Desi Kumalawongso",
      username: "desikumalawongso",
      followers: "16.4K",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      category: "Content Creator",
    },
    {
      name: "Della Putri",
      username: "dellaputriii",
      followers: "148.5K",
      image: "https://randomuser.me/api/portraits/women/30.jpg",
      category: "Travel & Lifestyle",
    },
  ];

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-800">
          Recommended Influencer
        </h2>
        <a
          href="#"
          className="text-purple-600 text-sm hover:underline font-medium"
        >
          Lihat Lainnya →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {influencers.map((influencer, index) => (
          <InfluencerCard key={index} {...influencer} />
        ))}
      </div>
    </section>
  );
}
