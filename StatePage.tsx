import { Link, useParams } from "wouter";
import { ExternalLink, Phone, MapPin, Shield, DollarSign, Users, TrendingUp, AlertTriangle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { getStateBySlug } from "@/data/states";

export default function StatePage() {
  const { stateSlug } = useParams<{ stateSlug: string }>();
  const state = getStateBySlug(stateSlug!);

  if (!state) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">State Not Found</h1>
        <p className="text-gray-600 mb-8">The requested state could not be found.</p>
        <Link href="/states" className="text-primary hover:text-blue-700 underline">
          Return to State Directory
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`Unclaimed Money Search in ${state.name} - Free Official Database`}
        description={`Search ${state.name}'s official database for unclaimed property and missing money. ${state.stats?.totalAmount || 'Millions'} in unclaimed property available. 100% free search.`}
        keywords={`${state.name} unclaimed money, ${state.name} unclaimed property, ${state.name} missing money, ${state.name} state database`}
      />

      {/* Page Header */}
      <div className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4" aria-label="breadcrumb">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/states" className="hover:text-primary transition-colors">State Directory</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">{state.name}</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Unclaimed Money Search in {state.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            Search {state.name}'s official database for unclaimed property and missing money
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                {state.name} Unclaimed Property Office
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {state.name} holds {state.stats?.totalAmount || 'millions of dollars'} in unclaimed property 
                belonging to {state.stats?.properties || 'thousands of'} individuals and organizations.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h5 className="text-lg font-semibold text-green-800 mb-2 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  100% Free & Safe
                </h5>
                <p className="text-green-700">
                  This search is completely free and links directly to the official {state.name} state database. 
                  No fees are ever required to claim your property.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Common Types of Unclaimed Property:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Bank accounts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Paychecks</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Insurance proceeds</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Stocks and bonds</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Safe deposit box contents</span>
                    </li>
                  </ul>
                </div>
                
                {state.stats && (
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">{state.name} Statistics:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <DollarSign className="w-4 h-4 text-primary mr-2" />
                        <strong className="text-gray-900">{state.stats.totalAmount}</strong>
                        <span className="text-gray-600 ml-1">in unclaimed property</span>
                      </li>
                      <li className="flex items-center">
                        <Users className="w-4 h-4 text-primary mr-2" />
                        <strong className="text-gray-900">{state.stats.properties}</strong>
                        <span className="text-gray-600 ml-1">properties waiting</span>
                      </li>
                      <li className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-primary mr-2" />
                        <strong className="text-gray-900">{state.stats.avgClaim}</strong>
                        <span className="text-gray-600 ml-1">average claim</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="text-center mb-6 lg:mb-8">
                <a 
                  href={state.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary hover:bg-blue-700 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto max-w-sm sm:max-w-none"
                  data-testid={`search-${state.slug}-official`}
                >
                  <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3" />
                  <span className="hidden sm:inline">Search {state.name} Database Now</span>
                  <span className="sm:hidden">Search Database</span>
                </a>
                <p className="text-gray-500 text-xs sm:text-sm mt-3 px-2">
                  You will be redirected to the official {state.name} state website
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                How Unclaimed Property Works in {state.name}
              </h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Under {state.name}'s unclaimed property law, businesses are required to turn over property 
                to the state when there has been no customer contact for a specified period of time 
                (generally three years for most property types).
              </p>
              
              <h5 className="text-lg font-semibold text-gray-900 mb-4">Claiming Your Property</h5>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">1</div>
                  <div>
                    <strong className="text-gray-900">Search:</strong>
                    <span className="text-gray-700 ml-1">Use the official {state.name} database to find your property</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">2</div>
                  <div>
                    <strong className="text-gray-900">Verify:</strong>
                    <span className="text-gray-700 ml-1">Provide identification and documentation proving your ownership</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">3</div>
                  <div>
                    <strong className="text-gray-900">Claim:</strong>
                    <span className="text-gray-700 ml-1">Submit your claim online, by mail, or in person</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">4</div>
                  <div>
                    <strong className="text-gray-900">Receive:</strong>
                    <span className="text-gray-700 ml-1">Get your money once the claim is approved</span>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {(state.phone || state.email || state.address) && (
              <div className="bg-white rounded-xl shadow-lg mb-8">
                <div className="bg-primary text-white p-6 rounded-t-xl">
                  <h5 className="text-lg font-semibold flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    {state.name} Contact Info
                  </h5>
                </div>
                <div className="p-6">
                  {state.address && (
                    <div className="mb-4">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {state.address}
                      </p>
                    </div>
                  )}
                  
                  {state.phone && (
                    <div className="mb-4">
                      <p className="text-gray-700">
                        <strong>Phone:</strong> {state.phone}
                      </p>
                    </div>
                  )}
                  
                  {state.email && (
                    <div className="mb-4">
                      <p className="text-gray-700">
                        <strong>Email:</strong> {state.email}
                      </p>
                    </div>
                  )}
                  
                  <div>
                    <p className="text-gray-700">
                      <strong>Office Hours:</strong><br />
                      Monday - Friday: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-lg">
              <div className="bg-yellow-400 text-gray-900 p-6 rounded-t-xl">
                <h5 className="text-lg font-semibold flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Avoid Scams
                </h5>
              </div>
              <div className="p-6">
                <p className="font-semibold text-gray-900 mb-4">Remember:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-red-500 mr-2 mt-1">✗</div>
                    <span className="text-gray-700">No fees are required</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-red-500 mr-2 mt-1">✗</div>
                    <span className="text-gray-700">No upfront payments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-red-500 mr-2 mt-1">✗</div>
                    <span className="text-gray-700">No "finders fee" companies needed</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2 mt-1">✓</div>
                    <span className="text-gray-700">Always use official state websites</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
