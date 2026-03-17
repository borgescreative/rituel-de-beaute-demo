import { Link } from "react-router-dom";
import { Search, User, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/src/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border/40 bg-brand-sand/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-semibold tracking-tight text-brand-green">
              Rituel de Beauté
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <div className="group relative">
            <Link
              to="/shop"
              className="hover:text-brand-green transition-colors py-2"
            >
              Shop
            </Link>
          </div>
          <Link
            to="/about"
            className="hover:text-brand-green transition-colors py-2"
          >
            About
          </Link>
          <Link
            to="/journal"
            className="hover:text-brand-green transition-colors py-2"
          >
            Journal
          </Link>
          <Link
            to="/contact"
            className="hover:text-brand-green transition-colors py-2"
          >
            Contact
          </Link>
        </nav>

        {/* Utilities */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs font-medium text-brand-ink/60 mr-4">
            <button className="hover:text-brand-ink transition-colors">
              TR
            </button>
            <span>/</span>
            <button className="hover:text-brand-ink transition-colors">
              EN
            </button>
            <span>/</span>
            <button className="hover:text-brand-ink transition-colors">
              DE
            </button>
          </div>
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Account"
            className="hidden md:inline-flex"
          >
            <User className="h-5 w-5" />
          </Button>
          <Link to="/cart">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Cart"
              className="relative"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-brand-green"></span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
