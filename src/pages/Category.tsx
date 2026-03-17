import { Link, useParams } from "react-router-dom";
import { Filter, ChevronDown, Heart } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Badge } from "@/src/components/ui/Badge";
import { motion } from "motion/react";

const PRODUCTS = [
  {
    id: 1,
    name: "Siyah Nokta Temizleyici Burun Bandı",
    benefit: "Derinlemesine Temizlik",
    price: "₺45.00",
    image: "https://picsum.photos/seed/burunbandi/500/500",
    isNew: false,
  },
  {
    id: 2,
    name: "Yoğun Terapi Ayak Bakım Maskesi",
    benefit: "Nemlendirici & Onarıcı",
    price: "₺85.00",
    image: "https://picsum.photos/seed/ayakmaskesi/500/500",
    isNew: true,
  },
  {
    id: 3,
    name: "3D Yüz Maskesi",
    benefit: "Sıkılaştırıcı Etki",
    price: "₺65.00",
    image: "https://picsum.photos/seed/3dmaske/500/500",
    isNew: false,
  },
  {
    id: 4,
    name: "Papatya Özlü Kolajen Maske",
    benefit: "Yatıştırıcı & Canlandırıcı",
    price: "₺55.00",
    image: "https://picsum.photos/seed/papatyamaske/500/500",
    isNew: false,
  },
  {
    id: 5,
    name: "Siyah Oksijen Maskesi",
    benefit: "Gözenek Sıkılaştırıcı",
    price: "₺70.00",
    image: "https://picsum.photos/seed/siyahmaske/500/500",
    isNew: false,
  },
  {
    id: 6,
    name: "El Maskesi",
    benefit: "Yoğun Nemlendirici",
    price: "₺80.00",
    image: "https://picsum.photos/seed/elmaskesi/500/500",
    isNew: false,
  },
  {
    id: 7,
    name: "After Sun Mask",
    benefit: "Güneş Sonrası Ferahlık",
    price: "₺60.00",
    image: "https://picsum.photos/seed/aftersun/500/500",
    isNew: true,
  },
  {
    id: 8,
    name: "Göz Çevresi Maskesi (Gel)",
    benefit: "Şişlik İndirici",
    price: "₺50.00",
    image: "https://picsum.photos/seed/gozmaskesi/500/500",
    isNew: false,
  },
  {
    id: 9,
    name: "Hyaluronic Asit Maske",
    benefit: "Derin Nem",
    price: "₺75.00",
    image: "https://picsum.photos/seed/hyaluronic/500/500",
    isNew: false,
  },
];

export function Category() {
  const { categoryId } = useParams();

  const title = categoryId
    ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1)
    : "All Products";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-white min-h-screen"
    >
      {/* Category Header */}
      <div className="bg-brand-sand py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="text-sm text-brand-ink/60 mb-4 flex items-center justify-center gap-2">
            <Link to="/" className="hover:text-brand-green transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-ink">{title}</span>
          </div>
          <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl mb-4">
            {title}
          </h1>
          <p className="text-brand-ink/70 max-w-2xl mx-auto">
            Discover our premium collection of {title.toLowerCase()}.
            Dermatologically tested and crafted with the finest ingredients for
            your daily ritual.
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="border-b border-brand-border sticky top-20 z-40 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <div className="flex items-center gap-4 text-sm text-brand-ink/70">
            <span className="hidden md:inline-block">
              {PRODUCTS.length} Products
            </span>
            <Button variant="ghost" size="sm" className="gap-2">
              Sort by <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-xl bg-brand-sand">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge
                      variant="default"
                      className="bg-brand-green text-white"
                    >
                      New
                    </Badge>
                  )}
                </div>
                <button className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-brand-ink/60 hover:text-brand-green hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
                  <Heart className="h-4 w-4" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button variant="primary" className="w-full shadow-lg">
                    Quick Add
                  </Button>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-xs font-medium uppercase tracking-wider text-brand-sage mb-1">
                  {product.benefit}
                </span>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-lg font-medium leading-tight group-hover:text-brand-green transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                <div className="mt-auto pt-2">
                  <span className="text-lg font-medium text-brand-ink">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button variant="outline" size="lg" className="w-full max-w-xs">
            Load More
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
