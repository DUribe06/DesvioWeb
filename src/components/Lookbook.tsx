import Image from "next/image";

const lookbookImages = [
  {
    src: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=600&h=900&fit=crop&q=80",
    alt: "Urban streetwear model in dark oversized jacket",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop&q=80",
    alt: "Fashion detail shot with graphic tee",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop&q=80",
    alt: "Streetwear model walking urban setting",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=900&fit=crop&q=80",
    alt: "Male model in dark urban clothing",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=600&h=400&fit=crop&q=80",
    alt: "Oversized graphic tee detail",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=600&h=400&fit=crop&q=80",
    alt: "Night urban streetwear aesthetic",
    span: "",
  },
];

export default function Lookbook() {
  return (
    <section id="lookbook" className="py-24 md:py-32 px-6 bg-desvio-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-desvio-blue mb-4">
            Collection
          </p>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-desvio-white">
            LOOKBOOK
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {lookbookImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden bg-desvio-concrete/10 ${image.span} group`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={image.span.includes("row-span-2") ? 900 : 400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-desvio-black/0 group-hover:bg-desvio-black/40 transition-colors duration-300 flex items-end p-4">
                <span className="font-body text-xs tracking-[0.2em] uppercase text-desvio-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  DESVÍO®
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
