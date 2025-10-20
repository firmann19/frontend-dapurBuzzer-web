import InfluencerCard from "./InfluencerCard";

export default function InfluencerAll() {
  const InfluencerAlls = [
    {
      name: "Meta Steffi Ganda",
      username: "metasteffi",
      followers: "57.4K",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      category: "Lifestyle",
    },
    {
      name: "Veronyca",
      username: "veronyca",
      followers: "82.1K",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      category: "Fashion",
    },
    {
      name: "Amelia Andiani",
      username: "ameliaandiani",
      followers: "45.9K",
      image: "https://randomuser.me/api/portraits/women/60.jpg",
      category: "Health",
    },
    {
      name: "Tiara Restu Anggraeni",
      username: "tiaraanggraeni",
      followers: "104.2K",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      category: "Entertainment",
    },
    {
      name: "Felita Wibowo",
      username: "felitawibowo",
      followers: "73.3K",
      image: "https://randomuser.me/api/portraits/women/26.jpg",
      category: "Youtuber",
    },
    {
      name: "Wulan Septiani",
      username: "wulansp",
      followers: "91.7K",
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      category: "Content Creator",
    },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Influencer Lainnya
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {InfluencerAlls.map((influencer, index) => (
          <InfluencerCard key={index} {...influencer} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 font-medium px-6 py-2 rounded-full transition">
          Lihat Semua Influencer
        </button>
      </div>
    </section>
  );
}
