"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, MapPin } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/#about" },
  { name: "UNIFORMS", href: "/#uniforms" },
  { name: "CLIENTS", href: "/#clients" },
  { name: "INSTAGRAM", href: "/#instagram" },
];

const regionalLinks = [
  { name: "Tamil Nadu", href: "/school-uniforms-tamil-nadu" },
  { name: "Kerala", href: "/school-uniforms-kerala" },
  { name: "Bengaluru", href: "/school-uniforms-bengaluru" },
  { name: "Chennai", href: "/school-uniforms-chennai" },
  { name: "Tirupur", href: "/school-uniforms-tirupur" },
  { name: "Trichy", href: "/school-uniforms-trichy" },
  { name: "Sports Jerseys", href: "/sports-uniforms" },
  { name: "Corporate T-Shirts", href: "/corporate-tshirts" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgb(0,0,0,0.03)] py-2"
        : "bg-white py-3.5"
        }`}
    >
      <div className="container mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => {
              if (pathname === '/') {
                window.scrollTo(0, 0);
              }
            }}
            className="flex items-center shrink-0 group"
            aria-label="EVENVIBE UNIFORMS Home"
          >
            <Image
              src="/logo.jpeg"
              alt="EVENVIBE UNIFORMS Logo - Custom Uniform Manufacturer"
              width={200}
              height={60}
              priority
              className="w-auto h-10 md:h-12 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-[12px] font-bold text-gray-800">
              {navLinks.map((link) => {
                const isHomeActive = link.href === '/' && pathname === '/';
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        if (link.href === '/' && pathname === '/') {
                          window.scrollTo(0, 0);
                        }
                      }}
                      className={`relative py-2 transition-colors hover:text-[#3FAE49] ${isHomeActive ? "text-[#111827]" : "text-gray-600"
                        }`}
                    >
                      {link.name}
                      {isHomeActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3FAE49]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/quote"
              className="group flex items-center gap-2 bg-[#3FAE49] hover:bg-[#2E7D32] text-white rounded-md px-5 py-2.5 text-[11px] font-bold transition-all shadow-sm"
            >
              REQUEST A QUOTE
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-800 hover:text-[#3FAE49] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl overflow-y-auto max-h-[85vh]"
          >
            <nav aria-label="Mobile Navigation" className="container mx-auto px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[14px] font-bold py-2.5 border-b border-gray-50 flex items-center justify-between text-gray-800 hover:text-[#3FAE49] transition-colors"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (link.href === '/' && pathname === '/') {
                      window.scrollTo(0, 0);
                    }
                  }}
                >
                  {link.name}
                  <ArrowRight className="w-4 h-4 text-gray-300" />
                </Link>
              ))}

              <div className="pt-3 pb-1">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#3FAE49] uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>REGIONAL UNIFORM HUBS</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {regionalLinks.map((r) => (
                    <Link
                      key={r.name}
                      href={r.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[12px] font-medium bg-gray-50 hover:bg-[#EAF6EA] hover:text-[#3FAE49] p-2 rounded-lg text-gray-700 transition-colors border border-gray-100"
                    >
                      {r.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center justify-center gap-2 w-full mt-3 bg-[#3FAE49] hover:bg-[#2E7D32] text-white rounded-md px-6 py-3.5 text-[13px] font-bold transition-all shadow-md"
              >
                REQUEST A QUOTE
                <ArrowRight className="w-4 h-4" />
              </Link>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
