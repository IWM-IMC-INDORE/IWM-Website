import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About IWM" },
  { href: "/eligibility", label: "Eligibility" },
  { href: "/alumni", label: "Alumni" },
  { href: "/sessions", label: "Archive" },
  // { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center gap-1 sm:gap-2 pr-1 sm:pr-0">
            <img
              src="https://res.cloudinary.com/dvneefjpi/image/upload/v1767773032/IWM_LOGO_ENHANCED_background_cleared_otc4tw.png"
              alt="IWM - Internship with Mayor"
              className="h-8 w-8 sm:h-12 sm:w-12 object-contain"
            />
            {/* Visual separator */}
            <div className="h-6 sm:h-8 w-[1.5px] bg-border/60 rounded-full hidden xs:block" />
            <img
              src="https://res.cloudinary.com/dvneefjpi/image/upload/v1768325433/enhanced_IMC_logo_background_clear_kdywgz.png"
              alt="IMC - Indore Municipal Corporation"
              className="h-7 sm:h-10 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[12px] sm:text-sm font-bold text-foreground leading-tight whitespace-nowrap">Internship with Mayor</p>
            <p className="text-[7px] sm:text-[10px] font-medium text-muted-foreground uppercase tracking-wide whitespace-nowrap">Indore Municipal Corporation</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={scrollToTop}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                location.pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSevZtptEtkpNbml4wzx4pvY5TtRDEJ3pBgIWhqZJSwJk9v75w/viewform" className="hidden lg:block" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm" className="shadow-none">Register Now</Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t border-border mt-2">
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSevZtptEtkpNbml4wzx4pvY5TtRDEJ3pBgIWhqZJSwJk9v75w/viewform" target="_blank" className="flex-1" onClick={() => setIsOpen(false)}>
                <Button variant="civic" className="w-full">Register</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
