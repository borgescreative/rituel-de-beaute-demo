import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Input } from "@/src/components/ui/Input";
import { Button } from "@/src/components/ui/Button";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-sand">
      <div className="container mx-auto px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="flex flex-col gap-4 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl font-semibold tracking-tight text-brand-green"
            >
              Rituel de Beauté
            </Link>
            <p className="text-sm text-brand-ink/70 leading-relaxed max-w-xs">
              Kaliteden ödün vermeden, en iyi ürünü en uygun fiyatla
              tüketicilerle buluşturmak.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                className="text-brand-ink/60 hover:text-brand-green transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-brand-ink/60 hover:text-brand-green transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-brand-ink/60 hover:text-brand-green transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div className="flex flex-col gap-4">
              <h4 className="font-serif text-lg font-medium">Shop</h4>
              <nav className="flex flex-col gap-3 text-sm text-brand-ink/70">
                <Link
                  to="/shop"
                  className="hover:text-brand-green transition-colors"
                >
                  All Products
                </Link>
                <Link
                  to="/shop/maskeler"
                  className="hover:text-brand-green transition-colors"
                >
                  Maskeler
                </Link>
                <Link
                  to="/shop/bantlar"
                  className="hover:text-brand-green transition-colors"
                >
                  Bantlar
                </Link>
                <Link
                  to="/shop/mendiller"
                  className="hover:text-brand-green transition-colors"
                >
                  Mendiller
                </Link>
                <Link
                  to="/shop/diger"
                  className="hover:text-brand-green transition-colors"
                >
                  Diğer Ürünler
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-serif text-lg font-medium">Company</h4>
              <nav className="flex flex-col gap-3 text-sm text-brand-ink/70">
                <Link
                  to="/about"
                  className="hover:text-brand-green transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/journal"
                  className="hover:text-brand-green transition-colors"
                >
                  Journal
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-brand-green transition-colors"
                >
                  Contact
                </Link>
                <a
                  href="#"
                  className="hover:text-brand-green transition-colors"
                >
                  KVKK
                </a>
                <a
                  href="#"
                  className="hover:text-brand-green transition-colors"
                >
                  Privacy Policy
                </a>
              </nav>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:col-span-1">
            <h4 className="font-serif text-lg font-medium">Newsletter</h4>
            <p className="text-sm text-brand-ink/70">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form
              className="flex flex-col gap-2 mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent"
              />
              <Button type="submit" variant="primary" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-brand-border pt-8 text-xs text-brand-ink/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} Rituel de Beauté. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-green"></span>
              Tüketici Bilgilendirme Hattı: 0850 480 80 92
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
