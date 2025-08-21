import { Link } from "wouter";
import { Search, Shield, University } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { getPopularStates } from "@/data/states";

export default function Home() {
  const popularStates = getPopularStates();

  return (
    <>
      <SEOHead
        title="Find Unclaimed Money in the USA — Free, Fast, and Safe"
        description="Find unclaimed money in the USA - Free, fast, and safe search through official state databases. No fees, no scams. Search all 50 states + DC."
        keywords="unclaimed money, unclaimed property, missing money, state databases, free search"
      />

      {/* Hero Section */}
      <section className="hero-section text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Find Unclaimed Money in the USA
            </h1>
            <p className="hero-subtitle text-lg sm:text-xl md:text-2xl font-light mb-6 sm:mb-8 text-blue-100">
              Free, Fast, and Safe Search Through Official State Databases
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-50 max-w-3xl mx-auto leading-relaxed px-2">
              Billions of dollars in unclaimed property are waiting to be reunited with their rightful owners. 
              Search official state databases to see if you have money waiting for you.
            </p>
            <Link href="/states">
              <button 
                className="btn-cta bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto max-w-xs sm:max-w-none"
                data-testid="cta-search-states"
              >
                <Search className="w-5 h-5 mr-2 inline" />
                <span className="hidden sm:inline">Search by State Now</span>
                <span className="sm:hidden">Search States</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center p-4 sm:p-8">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">$58B+</div>
              <div className="text-gray-600 text-xs sm:text-sm uppercase tracking-wide font-medium">Total Unclaimed Property</div>
            </div>
            <div className="text-center p-4 sm:p-8">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">51</div>
              <div className="text-gray-600 text-xs sm:text-sm uppercase tracking-wide font-medium">State Programs Covered</div>
            </div>
            <div className="text-center p-4 sm:p-8">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600 text-xs sm:text-sm uppercase tracking-wide font-medium">Free Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Unclaimed Money Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              What is Unclaimed Money?
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
                Unclaimed money consists of forgotten financial accounts, insurance payouts, refunds, 
                and other assets that have been turned over to state governments for safekeeping.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <University className="w-5 h-5 mr-2" />
                    Common Sources:
                  </h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Dormant bank accounts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Uncashed payroll checks</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Insurance payouts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Security deposits</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Why It's Safe:
                  </h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Government managed</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">No fees to claim</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Official state websites</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Identity verification required</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular States Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Popular State Searches
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {popularStates.map((state) => (
              <div 
                key={state.slug} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-4 sm:p-6 text-center">
                  <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{state.name}</h5>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4">{state.stats?.totalAmount} Available</p>
                  <Link href={`/state/${state.slug}`}>
                    <button 
                      className="bg-primary hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
                      data-testid={`search-${state.slug}`}
                    >
                      Search Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/states">
              <button 
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                data-testid="view-all-states"
              >
                View All 51 States
                <span className="ml-2">→</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
