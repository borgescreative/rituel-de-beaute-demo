import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Heart,
  Share2,
  ShieldCheck,
  Leaf,
  Droplet,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Badge } from "@/src/components/ui/Badge";
import { motion } from "motion/react";

const PRODUCT_DATA = {
  id: 1,
  name: "Yoğun Terapi Ayak Bakım Maskesi",
  benefit: "Nemlendirici & Onarıcı",
  price: "₺85.00",
  rating: 4.9,
  reviews: 128,
  description:
    "Dermatoloji uzmanları tarafından geliştirilen yeni nesil ayak bakım ritüeli. Sadece 20 dakikada pürüzsüz ve nemli ayaklar.",
  images: [
    "https://picsum.photos/seed/ayakmaskesi1/800/1000",
    "https://picsum.photos/seed/ayakmaskesi2/800/1000",
    "https://picsum.photos/seed/ayakmaskesi3/800/1000",
    "https://picsum.photos/seed/ayakmaskesi4/800/1000",
  ],
  tabs: [
    {
      title: "Kullanım Şekli",
      content:
        "1. Ayaklarınızı yıkayın ve kurulayın.\n2. Maskeyi ambalajından çıkarın ve ayaklarınıza giyin.\n3. 20-30 dakika bekleyin.\n4. Maskeyi çıkarın ve kalan esansı masaj yaparak yedirin.",
    },
    {
      title: "Uyarılar",
      content:
        "Sadece harici kullanım içindir. Gözle temasından kaçının. Çocukların ulaşamayacağı yerlerde saklayın. Tahriş olursa kullanımı bırakın.",
    },
    {
      title: "İçindekiler",
      content:
        "Aqua, Glycerin, Butylene Glycol, Cetearyl Alcohol, Stearic Acid, Palmitic Acid, Macadamia Ternifolia Seed Oil, Squalane, Butyrospermum Parkii Butter, Argania Spinosa Kernel Oil, Aloe Barbadensis Leaf Extract, Chamomilla Recutita Flower Extract, Centella Asiatica Extract, Panthenol, Allantoin, Tocopheryl Acetate, Sodium Hyaluronate, Ceramide NP, Phytosphingosine, Cholesterol, Hydrogenated Lecithin, Caprylic/Capric Triglyceride, Dimethicone, Glyceryl Stearate, PEG-100 Stearate, Polysorbate 60, Sorbitan Stearate, Carbomer, Arginine, Disodium EDTA, Chlorphenesin, Phenoxyethanol, Parfum.",
    },
    {
      title: "SSS",
      content:
        "S: Ne sıklıkla kullanmalıyım?\nC: Haftada 1-2 kez kullanmanız önerilir.\n\nS: Hamileler kullanabilir mi?\nC: Doktorunuza danışmanız tavsiye edilir.",
    },
  ],
};

export function Product() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openTab, setOpenTab] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 py-6">
        <div className="text-sm text-brand-ink/60 flex items-center gap-2">
          <Link to="/" className="hover:text-brand-green transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            to="/shop/maskeler"
            className="hover:text-brand-green transition-colors"
          >
            Maskeler
          </Link>
          <span>/</span>
          <span className="text-brand-ink">{PRODUCT_DATA.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-24 shrink-0">
              {PRODUCT_DATA.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[4/5] w-20 md:w-full overflow-hidden rounded-lg border-2 transition-colors ${activeImage === idx ? "border-brand-green" : "border-transparent hover:border-brand-border"}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
            <div className="relative flex-1 aspect-[4/5] overflow-hidden rounded-2xl bg-brand-sand">
              <img
                src={PRODUCT_DATA.images[activeImage]}
                alt={PRODUCT_DATA.name}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-brand-green text-white border-transparent">
                  Best Seller
                </Badge>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="text-xs font-medium uppercase tracking-wider text-brand-sage mb-2 block">
                {PRODUCT_DATA.benefit}
              </span>
              <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl mb-4">
                {PRODUCT_DATA.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-medium text-brand-ink">
                  {PRODUCT_DATA.price}
                </span>
                <div className="flex items-center gap-1 text-brand-ink/60 text-sm">
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <span className="ml-2">({PRODUCT_DATA.reviews} reviews)</span>
                </div>
              </div>
              <p className="text-brand-ink/70 leading-relaxed">
                {PRODUCT_DATA.description}
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mb-8 py-6 border-y border-brand-border">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-brand-green" />
                <span className="text-sm font-medium">
                  Dermatologically Tested
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="h-5 w-5 text-brand-green" />
                <span className="text-sm font-medium">Vegan Approved</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mb-12">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-brand-border rounded-md h-12">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 h-full flex items-center justify-center text-brand-ink/60 hover:text-brand-ink transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 h-full flex items-center justify-center text-brand-ink/60 hover:text-brand-ink transition-colors"
                  >
                    +
                  </button>
                </div>
                <Button size="lg" className="flex-1">
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 shrink-0"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <Button
                variant="secondary"
                size="lg"
                className="w-full bg-brand-ink hover:bg-brand-ink/90 text-white"
              >
                Buy it now
              </Button>
            </div>

            {/* Accordions */}
            <div className="border-t border-brand-border">
              {PRODUCT_DATA.tabs.map((tab, idx) => (
                <div key={idx} className="border-b border-brand-border">
                  <button
                    onClick={() => setOpenTab(openTab === idx ? null : idx)}
                    className="flex w-full items-center justify-between py-4 text-left font-serif text-lg font-medium transition-colors hover:text-brand-green"
                  >
                    {tab.title}
                    {openTab === idx ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openTab === idx ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-brand-ink/70 text-sm leading-relaxed whitespace-pre-line">
                      {tab.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Info */}
            <div className="mt-8 flex items-start gap-4 text-sm text-brand-ink/60 bg-brand-sand/50 p-4 rounded-lg">
              <Check className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
              <p>
                Free shipping on orders over ₺200. Delivery within 2-3 business
                days. Easy 14-day returns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cross Sell */}
      <section className="py-24 bg-brand-sand border-t border-brand-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Reusing best sellers for cross sell */}
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="group flex flex-col">
                <Link
                  to={`/product/${id}`}
                  className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-white"
                >
                  <img
                    src={`https://picsum.photos/seed/crosssell${id}/500/500`}
                    alt={`Product ${id}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="flex flex-col flex-1">
                  <Link to={`/product/${id}`}>
                    <h3 className="font-serif text-lg font-medium leading-tight group-hover:text-brand-green transition-colors line-clamp-2">
                      Rituel Product {id}
                    </h3>
                  </Link>
                  <div className="mt-auto pt-2">
                    <span className="text-lg font-medium text-brand-ink">
                      ₺{40 + id * 5}.00
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
