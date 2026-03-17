import {
  ShieldCheck,
  Leaf,
  Heart,
  Droplet,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/src/components/ui/Badge";

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-brand-sand px-4 md:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/about-hero/1920/1080?blur=4"
            alt="About Rituel de Beauté"
            className="h-full w-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-sand via-brand-sand/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto text-center max-w-3xl">
          <Badge
            variant="outline"
            className="mb-6 border-brand-green/20 text-brand-green bg-brand-green/5"
          >
            Est. 2011
          </Badge>
          <h1 className="font-serif text-5xl font-medium leading-[1.1] tracking-tight text-brand-ink md:text-7xl mb-6">
            Hakkımızda
          </h1>
          <p className="text-xl text-brand-ink/70 leading-relaxed">
            "Kaliteden ödün vermeden, en iyi ürünü en uygun fiyatla
            tüketicilerle buluşturmak."
          </p>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src="https://picsum.photos/seed/about-story/800/1000"
                alt="Our Story"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col gap-8 md:pl-12">
              <div>
                <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl mb-4">
                  Our Journey
                </h2>
                <p className="text-brand-ink/70 leading-relaxed mb-6">
                  Founded in 2011, Rituel de Beauté started with a simple
                  mission. We quickly became a leading name in Turkey,
                  especially recognized for our iconic Nose Strips (Burun
                  Bandı), trusted by millions of consumers.
                </p>
                <p className="text-brand-ink/70 leading-relaxed">
                  Over the years, we have expanded our product families to
                  include 3D masks, eye area masks, and intensive hand/foot
                  masks, always maintaining our commitment to quality and
                  accessibility.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-brand-border">
                <div>
                  <h3 className="font-serif text-4xl font-medium text-brand-green mb-2">
                    10M+
                  </h3>
                  <p className="text-sm text-brand-ink/60 uppercase tracking-wider">
                    Products Sold
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-4xl font-medium text-brand-green mb-2">
                    12+
                  </h3>
                  <p className="text-sm text-brand-ink/60 uppercase tracking-wider">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rituel de Beaute */}
      <section className="py-24 bg-brand-sand">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl mb-4">
              Why Rituel de Beauté?
            </h2>
            <p className="text-brand-ink/70">
              Our commitment to your skin and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Dermatologically Tested",
                desc: "Clinically proven to be safe and effective for all skin types.",
              },
              {
                icon: Droplet,
                title: "Paraben Free",
                desc: "Formulated without harmful preservatives for clean beauty.",
              },
              {
                icon: Leaf,
                title: "Vegan",
                desc: "British Vegan Society approved formulations.",
              },
              {
                icon: Heart,
                title: "Animal Test-Free",
                desc: "PETA certified cruelty-free. We love animals.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-brand-border/50 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-sand text-brand-green mb-6">
                  <feature.icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-brand-ink/70 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing & Global */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl mb-4">
                  Global Standards
                </h2>
                <p className="text-brand-ink/70 leading-relaxed mb-6">
                  Our products are manufactured and licensed across Japan,
                  Germany, South Korea, and Turkey. Every formulation is
                  rigorously tested in internationally accredited labs.
                </p>
                <ul className="space-y-4">
                  {[
                    "Produced on 2 continents",
                    "Regular inspections & compliance checks",
                    "Internationally accredited lab testing",
                    "Premium ingredient sourcing",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-brand-ink/80"
                    >
                      <CheckCircle2 className="h-5 w-5 text-brand-green shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-brand-sand rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <Globe
                className="absolute -right-12 -bottom-12 h-64 w-64 text-brand-green/5"
                strokeWidth={1}
              />
              <h3 className="font-serif text-2xl font-medium mb-6 relative z-10">
                Global & Private Label
              </h3>
              <p className="text-brand-ink/70 mb-8 relative z-10">
                We distribute outside Turkey via private label partners in
                countries including:
              </p>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  "Belgium",
                  "Netherlands",
                  "Luxembourg",
                  "France",
                  "Denmark",
                  "Azerbaijan",
                  "Kazakhstan",
                  "Turkmenistan",
                ].map((country, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm font-medium text-brand-ink/80"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-sage" />
                    {country}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-brand-ink text-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl mb-6">
            Partner With Us
          </h2>
          <p className="text-white/70 text-lg mb-12">
            Interested in retail opportunities or private label manufacturing?
            We'd love to hear from you.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="mailto:sales@ritueldebeaute.com"
              className="flex flex-col items-center justify-center p-8 rounded-xl border border-white/20 hover:bg-white/5 transition-colors"
            >
              <span className="text-sm text-white/60 uppercase tracking-wider mb-2">
                Retail / Private Label
              </span>
              <span className="font-medium">sales@ritueldebeaute.com</span>
            </a>
            <a
              href="mailto:pratik@ritueldebeaute.com"
              className="flex flex-col items-center justify-center p-8 rounded-xl border border-white/20 hover:bg-white/5 transition-colors"
            >
              <span className="text-sm text-white/60 uppercase tracking-wider mb-2">
                Suggestions / Feedback
              </span>
              <span className="font-medium">pratik@ritueldebeaute.com</span>
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
