import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { motion } from "motion/react";

const ARTICLES = [
  {
    id: 1,
    title: "The Ultimate Guide to Foot Care Masks",
    excerpt:
      "Discover how to achieve salon-quality pedicures at home with our intensive therapy foot masks.",
    category: "Rituals",
    date: "Oct 12, 2023",
    image: "https://picsum.photos/seed/journal1/800/600",
  },
  {
    id: 2,
    title: "Understanding Hyaluronic Acid",
    excerpt:
      "Why this powerhouse ingredient is essential for deep hydration and plump, youthful skin.",
    category: "Ingredients",
    date: "Sep 28, 2023",
    image: "https://picsum.photos/seed/journal2/800/600",
  },
  {
    id: 3,
    title: "5 Steps to a Perfect At-Home Spa Day",
    excerpt:
      "Create a relaxing sanctuary and treat yourself to a rejuvenating skincare routine.",
    category: "Lifestyle",
    date: "Sep 15, 2023",
    image: "https://picsum.photos/seed/journal3/800/600",
  },
  {
    id: 4,
    title: "The Truth About Blackhead Removal",
    excerpt:
      "How to effectively and safely use nose strips for clearer pores without damaging your skin barrier.",
    category: "Skincare 101",
    date: "Aug 30, 2023",
    image: "https://picsum.photos/seed/journal4/800/600",
  },
  {
    id: 5,
    title: "Why Vegan Skincare Matters",
    excerpt:
      "Exploring the benefits of plant-based formulations for your skin and the environment.",
    category: "Sustainability",
    date: "Aug 12, 2023",
    image: "https://picsum.photos/seed/journal5/800/600",
  },
  {
    id: 6,
    title: "Post-Sun Recovery Routine",
    excerpt:
      "Soothe and repair sun-exposed skin with our cooling After Sun Mask and hydration tips.",
    category: "Seasonal",
    date: "Jul 22, 2023",
    image: "https://picsum.photos/seed/journal6/800/600",
  },
];

export function Journal() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      {/* Header */}
      <div className="bg-brand-sand py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl mb-4">
            Sağlıklı Yaşam İpuçları
          </h1>
          <p className="text-brand-ink/70 max-w-2xl mx-auto">
            Expert advice, skincare routines, and wellness tips to elevate your
            daily rituals.
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="border-b border-brand-border sticky top-20 z-40 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            <button className="text-sm font-medium text-brand-green border-b-2 border-brand-green pb-1 whitespace-nowrap">
              All Articles
            </button>
            <button className="text-sm font-medium text-brand-ink/60 hover:text-brand-ink transition-colors pb-1 whitespace-nowrap">
              Skincare 101
            </button>
            <button className="text-sm font-medium text-brand-ink/60 hover:text-brand-ink transition-colors pb-1 whitespace-nowrap">
              Ingredients
            </button>
            <button className="text-sm font-medium text-brand-ink/60 hover:text-brand-ink transition-colors pb-1 whitespace-nowrap">
              Rituals
            </button>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-ink/40" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-9 bg-brand-sand/50 border-transparent focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="group relative overflow-hidden rounded-2xl bg-brand-sand aspect-[2/1] md:aspect-[3/1] mb-16">
          <img
            src="https://picsum.photos/seed/journal-featured/1200/600"
            alt="Featured Article"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-12 max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-wider text-brand-sage mb-3 block">
              Featured
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-4 leading-tight">
              The Science Behind Collagen Masks and Skin Elasticity
            </h2>
            <p className="text-white/80 text-lg mb-6 hidden md:block">
              Discover how collagen peptides penetrate the skin barrier to
              restore firmness and reduce fine lines in our comprehensive guide.
            </p>
            <Button
              variant="primary"
              className="bg-white text-brand-ink hover:bg-white/90"
            >
              Read Article
            </Button>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {ARTICLES.map((article) => (
            <article key={article.id} className="group flex flex-col">
              <Link
                to={`/journal/${article.id}`}
                className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl bg-brand-sand"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-brand-sage mb-3">
                <span>{article.category}</span>
                <span className="h-1 w-1 rounded-full bg-brand-border" />
                <span className="text-brand-ink/40">{article.date}</span>
              </div>
              <Link to={`/journal/${article.id}`}>
                <h3 className="font-serif text-2xl font-medium leading-tight group-hover:text-brand-green transition-colors mb-3">
                  {article.title}
                </h3>
              </Link>
              <p className="text-brand-ink/70 leading-relaxed mb-6 flex-1">
                {article.excerpt}
              </p>
              <Link
                to={`/journal/${article.id}`}
                className="inline-flex items-center text-sm font-medium text-brand-green hover:underline underline-offset-4 mt-auto"
              >
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Button variant="outline" size="lg" className="w-full max-w-xs">
            Load More Articles
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
