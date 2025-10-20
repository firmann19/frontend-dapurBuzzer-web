import { Tag } from "lucide-react";

interface PackageCardProps {
  title: string;
  price: string;
  image: string;
}

export default function PackageCard({ title, price, image }: PackageCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-gray-600 mt-2">
          <Tag className="w-4 h-4 text-purple-600" />
          <span className="font-medium">{price}</span>
        </div>

        <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-2 rounded-lg transition">
          View Detail
        </button>
      </div>
    </div>
  );
}
