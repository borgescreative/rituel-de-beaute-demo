import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { motion } from "motion/react";

export function JournalArticle() {
  const { id } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      {/* Article Header */}
      <div className="bg-brand-sand pt-12 pb-24 md:pt-16 md:pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Link
            to="/journal"
            className="inline-flex items-center text-sm font-medium text-brand-ink/60 hover:text-brand-green transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Journal
          </Link>

          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-brand-sage mb-6">
            <span>Skincare 101</span>
            <span className="h-1 w-1 rounded-full bg-brand-border" />
            <span className="text-brand-ink/40">Oct 12, 2023</span>
            <span className="h-1 w-1 rounded-full bg-brand-border" />
            <span className="text-brand-ink/40">5 min read</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
            The Ultimate Guide to Foot Care Masks
          </h1>

          <p className="text-xl text-brand-ink/70 leading-relaxed max-w-3xl">
            Discover how to achieve salon-quality pedicures at home with our
            intensive therapy foot masks. Say goodbye to dry, cracked heels and
            hello to baby-soft skin.
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 md:px-8 -mt-12 md:-mt-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[2/1] overflow-hidden rounded-2xl bg-brand-sand shadow-lg mb-16">
            <img
              src="https://picsum.photos/seed/journal-article/1200/600"
              alt="Foot Care"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Share Sidebar */}
            <div className="hidden md:block md:col-span-2">
              <div className="sticky top-32 flex flex-col gap-4 items-center">
                <span className="text-xs font-medium uppercase tracking-wider text-brand-ink/40 mb-2">
                  Share
                </span>
                <button className="h-10 w-10 rounded-full border border-brand-border flex items-center justify-center text-brand-ink/60 hover:text-brand-green hover:border-brand-green transition-colors">
                  <Facebook className="h-4 w-4" />
                </button>
                <button className="h-10 w-10 rounded-full border border-brand-border flex items-center justify-center text-brand-ink/60 hover:text-brand-green hover:border-brand-green transition-colors">
                  <Twitter className="h-4 w-4" />
                </button>
                <button className="h-10 w-10 rounded-full border border-brand-border flex items-center justify-center text-brand-ink/60 hover:text-brand-green hover:border-brand-green transition-colors">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="h-10 w-10 rounded-full border border-brand-border flex items-center justify-center text-brand-ink/60 hover:text-brand-green hover:border-brand-green transition-colors mt-4">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-10 prose prose-lg prose-brand max-w-none">
              <p className="lead text-xl text-brand-ink/80 leading-relaxed mb-8">
                We often neglect our feet until sandal season arrives, but
                regular foot care is essential for overall comfort and skin
                health. Enter the foot mask: a revolutionary product that brings
                the spa directly to your living room.
              </p>

              <h2 className="font-serif text-3xl font-medium mt-12 mb-6">
                Why Use a Foot Mask?
              </h2>
              <p className="text-brand-ink/80 leading-relaxed mb-6">
                Unlike regular lotions that only hydrate the surface, foot masks
                are designed to penetrate deeply into the thick skin of your
                soles. They create a sealed environment that forces active
                ingredients—like hyaluronic acid, shea butter, and gentle
                exfoliants—to absorb more effectively.
              </p>

              <div className="my-12 p-8 bg-brand-sand/50 rounded-2xl border border-brand-border/50">
                <h3 className="font-serif text-2xl font-medium mb-4">
                  The Rituel de Beauté Difference
                </h3>
                <p className="text-brand-ink/80 leading-relaxed m-0">
                  Our <strong>Yoğun Terapi Ayak Bakım Maskesi</strong> is
                  formulated with a unique blend of Macadamia Oil, Squalane, and
                  Ceramide NP. It's dermatologically tested and vegan-approved,
                  ensuring you get premium care without harsh chemicals.
                </p>
              </div>

              <h2 className="font-serif text-3xl font-medium mt-12 mb-6">
                How to Maximize Your Results
              </h2>
              <ol className="list-decimal pl-6 space-y-4 text-brand-ink/80 leading-relaxed mb-12">
                <li>
                  <strong>Prep is Key:</strong> Always start with clean, dry
                  feet. For an extra boost, soak your feet in warm water for 10
                  minutes beforehand to soften the skin.
                </li>
                <li>
                  <strong>Secure the Fit:</strong> Slip on the booties and use
                  the attached stickers to secure them tightly around your
                  ankles. This prevents the essence from evaporating.
                </li>
                <li>
                  <strong>Relax:</strong> Leave the mask on for 20-30 minutes.
                  This is the perfect time to read a book or watch an episode of
                  your favorite show.
                </li>
                <li>
                  <strong>Massage:</strong> After removing the booties, do not
                  wash your feet! Instead, massage the remaining essence into
                  your skin until fully absorbed.
                </li>
              </ol>

              <div className="aspect-[16/9] overflow-hidden rounded-xl bg-brand-sand my-12">
                <img
                  src="https://picsum.photos/seed/foot-care-routine/800/450"
                  alt="Foot Care Routine"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h2 className="font-serif text-3xl font-medium mt-12 mb-6">
                Consistency is the Secret
              </h2>
              <p className="text-brand-ink/80 leading-relaxed mb-8">
                For best results, incorporate a foot mask into your routine once
                a week. Over time, you'll notice a significant reduction in
                calluses and a dramatic improvement in skin elasticity and
                softness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="py-24 bg-brand-sand border-t border-brand-border mt-12">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
              Read Next
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[2, 3, 4].map((id) => (
              <article
                key={id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-border/50"
              >
                <Link
                  to={`/journal/${id}`}
                  className="relative aspect-[4/3] overflow-hidden bg-brand-sand"
                >
                  <img
                    src={`https://picsum.photos/seed/journal${id}/600/450`}
                    alt={`Article ${id}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-brand-sage mb-3">
                    <span>Lifestyle</span>
                  </div>
                  <Link to={`/journal/${id}`}>
                    <h3 className="font-serif text-xl font-medium leading-tight group-hover:text-brand-green transition-colors mb-3">
                      5 Steps to a Perfect At-Home Spa Day
                    </h3>
                  </Link>
                  <Link
                    to={`/journal/${id}`}
                    className="inline-flex items-center text-sm font-medium text-brand-green hover:underline underline-offset-4 mt-auto pt-4"
                  >
                    Read Article <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
