import { Music, Plane, Film, Dumbbell, Play, Grid } from "lucide-react";
import type { ReactElement } from "react";
import { useGetCategoriesQuery } from "../redux/category/categoryApi";

const iconMap: Record<string, ReactElement> = {
  Tiktok: <Music className="w-7 h-7 text-purple-600" />,
  "Travel & Lifestyle": <Plane className="w-7 h-7 text-purple-600" />,
  Entertainment: <Film className="w-7 h-7 text-purple-600" />,
  "Health & Sport": <Dumbbell className="w-7 h-7 text-purple-600" />,
  Youtuber: <Play className="w-7 h-7 text-purple-600" />,
  default: <Grid className="w-7 h-7 text-purple-600" />,
};

export default function Category() {
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();

  if (isLoading) {
    return (
      <section className="mt-8 text-center text-gray-500">
        Memuat kategori...
      </section>
    );
  }

  if (isError) {
    return (
      <section className="mt-8 text-center text-red-500">
        Gagal memuat kategori.
      </section>
    );
  }

  return (
    <section className="bg-transparent mt-8">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 px-2">
        Kategori Populer
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-5">
        {categories?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-md p-4 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-50 group-hover:bg-purple-100 transition overflow-hidden">
              {item.iconUrl ? (
                <img
                  src={item.iconUrl}
                  alt={item.name}
                  className="w-7 h-7 object-contain"
                />
              ) : (
                iconMap[item.name] || iconMap.default
              )}
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
