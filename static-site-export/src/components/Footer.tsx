import { Link } from "wouter";
import { Search } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-12 sm:mt-16">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 text-white mb-4">
              <Search className="w-6 h-6" />
              <span className="font-semibold text-lg">Find Unclaimed Money</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              A free directory of official state unclaimed property resources. Help people reunite with their missing money safely and securely.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="font-semibold text-white mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-yellow-300 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/states" className="text-blue-100 hover:text-yellow-300 transition-colors text-sm">
                  State Directory
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-blue-100 hover:text-yellow-300 transition-colors text-sm">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Important */}
          <div>
            <h6 className="font-semibold text-white mb-4">Important</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-100 hover:text-yellow-300 transition-colors text-sm">
                  About & Disclaimer
                </Link>
              </li>
              <li>
                <span className="text-blue-100 text-sm">Always Use Official Sites</span>
              </li>
              <li>
                <span className="text-blue-100 text-sm">Never Pay Fees</span>
              </li>
            </ul>
          </div>

          {/* Scam Warning */}
          <div>
            <h6 className="font-semibold text-white mb-4">Scam Warning</h6>
            <p className="text-blue-100 text-sm leading-relaxed">
              This is a free informational resource. Legitimate unclaimed property claims never require upfront fees. Always use official state websites.
            </p>
          </div>
        </div>

        <hr className="border-blue-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm mb-4 md:mb-0">
            © {currentYear} Find Unclaimed Money Directory. This is a private informational resource not affiliated with any government agency.
          </p>
          <p className="text-blue-100 text-sm">
            Last updated: December {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
