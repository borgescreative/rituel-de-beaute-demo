import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { motion } from "motion/react";

export function Contact() {
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
            Contact Us
          </h1>
          <p className="text-brand-ink/70 max-w-2xl mx-auto">
            We're here to help. Reach out to our customer care team or explore
            partnership opportunities.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Information */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="font-serif text-3xl font-medium tracking-tight mb-6">
                Get in Touch
              </h2>
              <p className="text-brand-ink/70 leading-relaxed max-w-md">
                Whether you have a question about our products, need assistance
                with an order, or want to discuss a business partnership, our
                team is ready to assist you.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-sand text-brand-green">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Consumer Hotline</h3>
                  <p className="text-brand-ink/60 text-sm mb-2">
                    Available Mon-Fri, 9am-6pm
                  </p>
                  <a
                    href="tel:08504808092"
                    className="text-brand-green font-medium hover:underline"
                  >
                    0850 480 80 92
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-sand text-brand-green">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="grid gap-4 w-full">
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      Retail & Private Label
                    </h3>
                    <p className="text-brand-ink/60 text-sm mb-2">
                      For B2B inquiries and partnerships
                    </p>
                    <a
                      href="mailto:sales@ritueldebeaute.com"
                      className="text-brand-green font-medium hover:underline"
                    >
                      sales@ritueldebeaute.com
                    </a>
                  </div>
                  <div className="h-px w-full bg-brand-border" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      Suggestions & Feedback
                    </h3>
                    <p className="text-brand-ink/60 text-sm mb-2">
                      Share your thoughts with us
                    </p>
                    <a
                      href="mailto:pratik@ritueldebeaute.com"
                      className="text-brand-green font-medium hover:underline"
                    >
                      pratik@ritueldebeaute.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-sand text-brand-green">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Headquarters</h3>
                  <p className="text-brand-ink/60 text-sm mb-2">
                    Visit us by appointment
                  </p>
                  <address className="not-italic text-brand-ink/80 leading-relaxed">
                    Rituel de Beauté Kozmetik A.Ş.
                    <br />
                    Maslak Mah. Büyükdere Cad.
                    <br />
                    Sarıyer, İstanbul, Turkey
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-sand/50 p-8 md:p-12 rounded-2xl border border-brand-border/50">
            <h2 className="font-serif text-2xl font-medium tracking-tight mb-8">
              Send a Message
            </h2>
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-brand-ink/80"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Jane"
                    className="bg-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-brand-ink/80"
                  >
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" className="bg-white" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-brand-ink/80"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="bg-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-brand-ink/80"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="flex h-10 w-full rounded-md border border-brand-border bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-green transition-colors"
                >
                  <option value="">Select a subject...</option>
                  <option value="order">Order Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="b2b">Wholesale / B2B</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-brand-ink/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                  className="flex w-full rounded-md border border-brand-border bg-white px-3 py-2 text-sm placeholder:text-brand-ink/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-green transition-colors resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full mt-4 group">
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
