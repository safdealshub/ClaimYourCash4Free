import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Search, MapPin, ExternalLink } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { statesData } from "@/data/states";

export default function StateDirectory() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStates = useMemo(() => {
    if (!searchTerm.trim()) return statesData;
    
    return statesData.filter(state =>
      state.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <>
      <SEOHead
        title="State Directory - Find Unclaimed Money by State"
        description="Choose your state to search for unclaimed money through official government databases. All 50 states plus DC covered."
        keywords="state directory, unclaimed property by state, state databases, find money by state"
      />

      {/* Page Header */}
      <div className="bg-gray-50 py-6 sm:py-8 border-b">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4" aria-label="breadcrumb">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">State Directory</li>
            </ol>
          </nav>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            State Directory
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto px-2">
            Choose your state to search for unclaimed money through official government databases
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Search Box */}
        <div className="max-w-lg mx-auto mb-8 sm:mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-3 sm:py-4 text-base sm:text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
              placeholder="Search for your state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              data-testid="state-search-input"
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            Start typing to filter states
          </p>
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredStates.map((state) => (
            <div
              key={state.slug}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              data-testid={`state-card-${state.slug}`}
            >
              <div className="p-4 sm:p-6 h-full flex flex-col">
                <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-primary mr-2 flex-shrink-0" />
                  {state.name}
                </h5>
                <p className="text-gray-600 text-xs sm:text-sm flex-grow mb-4 leading-relaxed">
                  {state.description}
                </p>
                <div className="mt-auto">
                  <Link href={`/state/${state.slug}`}>
                    <button 
                      className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm sm:text-base"
                      data-testid={`search-${state.slug}-button`}
                    >
                      <span className="hidden sm:inline">Search {state.name}</span>
                      <span className="sm:hidden">Search</span>
                      <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 ml-2" />
                    </button>
                  </Link>
                  <p className="text-center text-xs text-gray-500 mt-2">
                    Official State Website
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredStates.length === 0 && searchTerm && (
          <div className="text-center py-12" data-testid="no-results">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-md mx-auto">
              <Search className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <p className="text-blue-800 font-medium">
                No states found matching your search.
              </p>
              <p className="text-blue-600 text-sm mt-2">
                Try a different search term.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
