import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ShieldCheck, Heart, Droplet } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Badge } from "@/src/components/ui/Badge";
import { motion } from "motion/react";

const TRUST_BADGES = [
  { icon: ShieldCheck, title: "Dermatolojik Olarak Test Edildi" },
  { icon: Droplet, title: "Paraben İçermez" },
  { icon: Leaf, title: "Vegan Formül" },
  { icon: Heart, title: "Hayvanlar Üzerinde Test Edilmez" },
];

const CATEGORIES = [
  {
    name: "Bantlar",
    image: "https://picsum.photos/seed/bantlar/400/500?blur=2",
    link: "/shop/bantlar",
  },
  {
    name: "Maskeler",
    image: "https://picsum.photos/seed/maskeler/400/500?blur=2",
    link: "/shop/maskeler",
  },
  {
    name: "Mendiller",
    image: "https://picsum.photos/seed/mendiller/400/500?blur=2",
    link: "/shop/mendiller",
  },
  {
    name: "Diğer Ürünler",
    image: "https://picsum.photos/seed/diger/400/500?blur=2",
    link: "/shop/diger",
  },
];

const BEST_SELLERS = [
  {
    id: 1,
    name: "Siyah Nokta Temizleyici Burun Bandı",
    benefit: "Derinlemesine Temizlik",
    price: "₺45.00",
    image: "https://picsum.photos/seed/burunbandi/500/500",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Yoğun Terapi Ayak Bakım Maskesi",
    benefit: "Nemlendirici & Onarıcı",
    price: "₺85.00",
    image: "https://picsum.photos/seed/ayakmaskesi/500/500",
    rating: 4.9,
  },
  {
    id: 3,
    name: "3D Yüz Maskesi",
    benefit: "Sıkılaştırıcı Etki",
    price: "₺65.00",
    image: "https://picsum.photos/seed/3dmaske/500/500",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Papatya Özlü Kolajen Maske",
    benefit: "Yatıştırıcı & Canlandırıcı",
    price: "₺55.00",
    image: "https://picsum.photos/seed/papatyamaske/500/500",
    rating: 4.6,
  },
];

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-brand-sand px-4 md:px-8">
        <div className="flex flex-col items-start gap-6 max-w-xl">
  <Badge
    variant="outline"
    className="border-brand-green/20 text-brand-green bg-brand-green/5"
  >
    Yeni Formül
  </Badge>

  <h1 className="font-serif text-5xl font-medium leading-[1.08] tracking-tight text-brand-ink md:text-7xl">
    Yoğun Terapi <br />
    <span className="italic text-brand-green">
      Ayak Bakım Maskesi
    </span>
  </h1>

  <p className="text-lg text-brand-ink/70 leading-relaxed">
    Kuru, yıpranmış ve sertleşmiş ayaklar için geliştirilen yoğun bakım ritüeli.
    Sadece 20 dakikada daha yumuşak, daha pürüzsüz ve bakımlı bir görünüm.
  </p>

  <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
    <Button size="lg" className="w-full sm:w-auto group">
      Ürünü İncele
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>

    <Button variant="outline" size="lg" className="w-full sm:w-auto">
      Daha Fazla Bilgi
    </Button>
  </div>
</div>
          <div className="relative hidden md:flex justify-center">
            <div className="relative h-[600px] w-[450px] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://picsum.photos/seed/ayakmaskesi-hero/800/1200"
                alt="Yoğun Terapi Ayak Bakım Maskesi"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-brand-border bg-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {TRUST_BADGES.map((badge, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-3 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-sand text-brand-green">
                  <badge.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <span className="font-serif text-sm font-medium tracking-wide text-brand-ink/80">
                  {badge.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-brand-sand">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
  Ürün Kategorileri
</h2>
<p className="mt-4 text-brand-ink/60">
  Günlük bakım ritüelinize uygun ürünleri keşfedin.
</p>
            </div>
            <Link
              to="/shop"
              className="hidden md:flex items-center text-sm font-medium text-brand-green hover:underline underline-offset-4"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category, idx) => (
              <Link
                key={idx}
                to={category.link}
                className="group relative block overflow-hidden rounded-2xl aspect-[4/5]"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-serif text-2xl font-medium text-white">
                    {category.name}
                  </h3>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
                    Explore <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
           <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
  En Çok Tercih Edilenler
</h2>
<p className="mt-4 text-brand-ink/60">
  Kullanıcılarımızın en çok tercih ettiği ürünler.
</p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {BEST_SELLERS.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <Link
                  to={`/product/${product.id}`}
                  className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-brand-sand"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-brand-ink backdrop-blur-sm hover:bg-white"
                    >
                      Best Seller
                    </Badge>
                  </div>
                </Link>
                <div className="flex flex-col flex-1">
                  <span className="text-xs font-medium uppercase tracking-wider text-brand-sage mb-1">
                    {product.benefit}
                  </span>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif text-lg font-medium leading-tight group-hover:text-brand-green transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-lg font-medium text-brand-ink">
                      {product.price}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full px-4"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-24 bg-brand-sand">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://picsum.photos/seed/editorial/1000/800"
                alt="Rituel Moments"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col items-start gap-6 md:pl-12">
            <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
  Bakımın <br />
  <span className="italic text-brand-green">
    Ritüel Hali
  </span>
</h2>
<p className="text-lg text-brand-ink/70 leading-relaxed">
  Rituel de Beauté, cilt bakımını sıradan bir rutin olmaktan çıkarıp
  keyifli bir deneyime dönüştürür. Profesyonel etkili ürünlerimiz,
  evinizin konforunda bakım hissini yeniden tanımlar.
</p>
<Button variant="outline" size="lg" className="mt-4">
  Hikayemizi Keşfet
</Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
