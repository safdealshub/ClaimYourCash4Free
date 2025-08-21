import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/states", label: "State Directory" },
    { path: "/how-it-works", label: "How It Works" },
    { path: "/about", label: "About & Disclaimer" }
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-link focus-visible"
        data-testid="skip-to-content"
      >
        Skip to main content
      </a>
      
      <nav 
        className="mobile-nav" 
        role="navigation" 
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <Link 
              href="/" 
              className="touch-target flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-semibold text-lg sm:text-xl"
              data-testid="logo-link"
              aria-label="Find Unclaimed Money - Home"
            >
              <Search className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
              <span className="hidden sm:inline truncate max-w-[200px] lg:max-w-none">Find Unclaimed Money</span>
              <span className="sm:hidden">Find Money</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible rounded ${
                    isActive(item.path) 
                      ? "text-primary border-b-2 border-primary bg-primary/5" 
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  }`}
                  data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden touch-target p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-50 focus-visible"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              data-testid="mobile-menu-button"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {mobileMenuOpen && (
          <div 
            className="mobile-menu"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="space-y-1 max-w-sm mx-auto">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`mobile-menu-item text-base font-medium ${
                    isActive(item.path) 
                      ? "text-primary bg-primary/10 border-l-4 border-primary" 
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
