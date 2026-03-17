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
    image: "/images/rituel-07.jpg",
    isNew: false,
    category: "bantlar",
  },
  {
    id: 2,
    name: "Yoğun Terapi Ayak Bakım Maskesi",
    benefit: "Nemlendirici & Onarıcı",
    price: "₺85.00",
    image: "/images/rituel-08.jpg",
    isNew: true,
    category: "maskeler",
  },
  {
    id: 3,
    name: "3D Yüz Maskesi",
    benefit: "Sıkılaştırıcı Etki",
    price: "₺65.00",
    image: "/images/rituel-09.jpg",
    isNew: false,
    category: "maskeler",
  },
  {
    id: 4,
    name: "Papatya Özlü Kolajen Maske",
    benefit: "Yatıştırıcı & Canlandırıcı",
    price: "₺55.00",
    image: "/images/rituel-010.jpg",
    isNew: false,
    category: "maskeler",
  },
  {
    id: 5,
    name: "Siyah Oksijen Maskesi",
    benefit: "Gözenek Sıkılaştırıcı",
    price: "₺70.00",
    image: "/images/rituel-012.jpg",
    isNew: false,
    category: "maskeler",
  },
  {
    id: 6,
    name: "El Maskesi",
    benefit: "Yoğun Nemlendirici",
    price: "₺80.00",
    image: "/images/rituel-013.jpg",
    isNew: false,
    category: "maskeler",
  },
  {
    id: 7,
    name: "After Sun Maske",
    benefit: "Güneş Sonrası Ferahlık",
    price: "₺60.00",
    image: "/images/rituel-014.jpg",
    isNew: true,
    category: "diger",
  },
  {
    id: 8,
    name: "Göz Çevresi Maskesi",
    benefit: "Şişlik Karşıtı Bakım",
    price: "₺50.00",
    image: "/images/rituel-015.jpg",
    isNew: false,
    category: "maskeler",
  },
  {
    id: 9,
    name: "Hyaluronic Asit Maske",
    benefit: "Derin Nem Desteği",
    price: "₺75.00",
    image: "/images/rituel-016.jpg",
    isNew: false,
    category: "maskeler",
  },
];

const CATEGORY_CONTENT: Record<
  string,
  { title: string; description: string }
> = {
  bantlar: {
    title: "Burun Bantları",
    description:
      "Siyah nokta ve fazla yağı hedefleyen, pratik kullanım sunan etkili burun bandı çözümlerini keşfedin.",
  },
  maskeler: {
    title: "Maskeler",
    description:
      "Cildinizin ve bakım rutininizin ihtiyaçlarına uygun, yoğun etkili maske koleksiyonumuzu keşfedin.",
  },
  mendiller: {
    title: "Mendiller",
    description:
      "Günlük kullanım için pratik, ferahlatıcı ve cilt dostu bakım mendillerimizi inceleyin.",
  },
  diger: {
    title: "Diğer Ürünler",
    description:
      "Bakım rutininizi tamamlayan tamamlayıcı ürünlerimizi keşfedin.",
  },
};

export function Category() {
  const { categoryId } = useParams();

  const categoryData = categoryId
    ? CATEGORY_CONTENT[categoryId]
    : {
        title: "Tüm Ürünler",
        description:
          "Rituel de Beauté’nin bakım ritüelinize eşlik eden özenle seçilmiş ürün koleksiyonunu keşfedin.",
      };

  const filteredProducts = categoryId
    ? PRODUCTS.filter((product) => product.category === categoryId)
    : PRODUCTS;

  const pageTitle = categoryData?.title || "Tüm Ürünler";
  const pageDescription =
    categoryData?.description ||
    "Rituel de Beauté’nin bakım ritüelinize eşlik eden özenle seçilmiş ürün koleksiyonunu keşfedin.";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen flex-col bg-white"
    >
      {/* Category Header */}
      <div className="bg-brand-sand py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-8">
          <div className="mb-4 flex items-center justify-center gap-2 text-sm text-brand-ink/60">
            <Link to="/" className="transition-colors hover:text-brand-green">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-brand-ink">{pageTitle}</span>
          </div>

          <h1 className="mb-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">
            {pageTitle}
          </h1>

          <p className="mx-auto max-w-2xl text-brand-ink/70">
            {pageDescription}
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="sticky top-20 z-40 border-b border-brand-border bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtrele
          </Button>

          <div className="flex items-center gap-4 text-sm text-brand-ink/70">
            <span className="hidden md:inline-block">
              {filteredProducts.length} Ürün
            </span>
            <Button variant="ghost" size="sm" className="gap-2">
              Sırala <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-xl bg-brand-sand">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                <div className="absolute left-4 top-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge
                      variant="default"
                      className="bg-brand-green text-white"
                    >
                      Yeni
                    </Badge>
                  )}
                </div>

                <button className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-brand-ink/60 opacity-0 transition-colors hover:bg-white hover:text-brand-green group-hover:opacity-100">
                  <Heart className="h-4 w-4" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <Button variant="primary" className="w-full shadow-lg">
                    Hızlı Ekle
                  </Button>
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <span className="mb-1 text-xs font-medium uppercase tracking-wider text-brand-sage">
                  {product.benefit}
                </span>

                <Link to={`/product/${product.id}`}>
                  <h3 className="line-clamp-2 font-serif text-lg font-medium leading-tight transition-colors group-hover:text-brand-green">
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
            Daha Fazla Ürün Yükle
          </Button>
        </div>
      </div>
    </motion.div>
  );
}