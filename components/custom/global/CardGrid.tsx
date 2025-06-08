import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
import Image from "next/image";

// components/CardGrid.jsx
export default function CardGrid() {
  const cards = [
    {
      id: 1,
      image: "https://i.ibb.co/NdGf1FjM/photo-1748968218568-a5eac621e65c.jpg",
      title: "Cultural Tours",
      subtitle: "Dive into rich traditions of Punjab & Uttarakhand.",
      link: "#",
    },
    {
      id: 2,
      image: "https://i.ibb.co/NdGf1FjM/photo-1748968218568-a5eac621e65c.jpg",
      title: "Nature Trails",
      subtitle: "Explore eco-stays, hikes, and waterfalls.",
      link: "#",
    },
    {
      id: 3,
      image: "https://i.ibb.co/NdGf1FjM/photo-1748968218568-a5eac621e65c.jpg",
      title: "Village Life",
      subtitle: "Live the simplicity and charm of rural India.",
      link: "#",
    },
    {
      id: 4,
      image: "https://i.ibb.co/NdGf1FjM/photo-1748968218568-a5eac621e65c.jpg",
      title: "Food Discovery",
      subtitle: "Savor local flavors from street to farm kitchens.",
      link: "#",
    },
  ];

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden bg-background p-20">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />

      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map(({ id, image, title, subtitle, link }) => (
          <div
            key={id}
            className="bg-white shadow hover:shadow-md transition overflow-hidden"
          >
            <Image
              src={image}
              alt={title}
              className="w-full h-60 object-cover"
            />
            <div className="p-3">
              <h3 className="text-md font-semibold">{title}</h3>
              <p className="text-xs text-gray-600 mb-3">{subtitle}</p>
              <a href={link} className="text-blue-600 text-sm font-medium">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
