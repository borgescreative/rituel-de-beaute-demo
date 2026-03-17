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
    name: "Burun Bantları",
    image: "/images/rituel-03.jpg",
    link: "/shop/bantlar",
  },
  {
    name: "Maskeler",
    image: "/images/rituel-04.jpg",
    link: "/shop/maskeler",
  },
  {
    name: "Mendiller",
    image: "/images/rituel-05.jpg",
    link: "/shop/mendiller",
  },
  {
    name: "Diğer Ürünler",
    image: "/images/rituel-06.jpg",
    link: "/shop/diger",
  },
];

const BEST_SELLERS = [
  {
    id: 1,
    name: "Siyah Nokta Temizleyici Burun Bandı",
    benefit: "Derinlemesine Temizlik",
    price: "₺45.00",
    image: "/images/rituel-07.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Yoğun Terapi Ayak Bakım Maskesi",
    benefit: "Nemlendirici & Onarıcı",
    price: "₺85.00",
    image: "/images/rituel-08.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "3D Yüz Maskesi",
    benefit: "Sıkılaştırıcı Etki",
    price: "₺65.00",
    image: "/images/rituel-09.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Papatya Özlü Kolajen Maske",
    benefit: "Yatıştırıcı & Canlandırıcı",
    price: "₺55.00",
    image: "/images/rituel-010.jpg",
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
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-brand-sand px-4 md:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/rituel-01.jpg"
            alt="Hero Background"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-sand via-brand-sand/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto grid items-center gap-12 md:grid-cols-2 md:gap-8">
          <div className="flex max-w-xl flex-col items-start gap-6">
            <Badge
              variant="outline"
              className="border-brand-green/20 bg-brand-green/5 text-brand-green"
            >
              Yeni Formül
            </Badge>

           <h1 className="font-serif text-5xl font-medium leading-[1.08] tracking-tight text-brand-ink md:text-7xl">
  Rahat Nefes <br />
  <span className="italic text-brand-green">
    Burun Bandı
  </span>
</h1>

            <p className="text-lg leading-relaxed text-brand-ink/70">
  Burun kanallarını nazikçe açarak nefes almayı kolaylaştırır.
  Horlamayı azaltmaya yardımcı olur ve gece boyunca kesintisiz, rahat bir uyku sağlar.
</p>

            <div className="flex w-full flex-col items-center gap-4 pt-4 sm:w-auto sm:flex-row">
              <Button size="lg" className="group w-full sm:w-auto">
                Ürünü İncele
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Daha Fazla Bilgi
              </Button>
            </div>
          </div>

          <div className="relative hidden justify-center md:flex">
            <div className="relative h-[600px] w-[450px] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/rituel-02.jpg"
                alt="Yoğun Terapi Ayak Bakım Maskesi"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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

      <section className="bg-brand-sand py-24">
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
              className="hidden items-center text-sm font-medium text-brand-green hover:underline underline-offset-4 md:flex"
            >
              Tümünü Gör <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category, idx) => (
              <Link
                key={idx}
                to={category.link}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-serif text-2xl font-medium text-white">
                    {category.name}
                  </h3>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
                    Keşfet <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
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
                  />
                  <div className="absolute left-4 top-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-brand-ink backdrop-blur-sm hover:bg-white"
                    >
                      Çok Satan
                    </Badge>
                  </div>
                </Link>

                <div className="flex flex-1 flex-col">
                  <span className="mb-1 text-xs font-medium uppercase tracking-wider text-brand-sage">
                    {product.benefit}
                  </span>

                  <Link to={`/product/${product.id}`}>
                    <h3 className="line-clamp-2 font-serif text-lg font-medium leading-tight transition-colors group-hover:text-brand-green">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-lg font-medium text-brand-ink">
                      {product.price}
                    </span>
                    <Button variant="outline" size="sm" className="rounded-full px-4">
                      Sepete Ekle
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-sand py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl md:order-1">
              <img
                src="/images/rituel-011.jpg"
                alt="Rituel Moments"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="order-1 flex flex-col items-start gap-6 md:order-2 md:pl-12">
              <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
                Bakımın <br />
                <span className="italic text-brand-green">Ritüel Hali</span>
              </h2>

              <p className="text-lg leading-relaxed text-brand-ink/70">
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