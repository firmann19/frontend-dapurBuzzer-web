import { Users } from "lucide-react";

interface InfluencerCardProps {
  name: string;
  username: string;
  followers: string;
  image: string;
  category?: string;
}

export default function InfluencerCard({
  name,
  username,
  followers,
  image,
  category,
}: InfluencerCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        {category && (
          <span className="text-xs font-medium text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
            {category}
          </span>
        )}

        <h3 className="text-lg font-semibold mt-2 text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">@{username}</p>

        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
          <Users className="w-4 h-4 text-purple-600" />
          <span>{followers} Followers</span>
        </div>

        <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition">
          Book Now
        </button>
      </div>
    </div>
  );
}
