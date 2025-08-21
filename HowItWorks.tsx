import { Link } from "wouter";
import { Lightbulb, Shield, CheckCircle, XCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Choose Your State",
      content: "Start by selecting the state where you think you might have unclaimed property. This could be where you previously lived, worked, or had business relationships. Most people should search in multiple states where they've had addresses.",
      tips: [
        "Search states where you've lived",
        "Include states where you've worked", 
        "Check states where family members lived"
      ]
    },
    {
      number: 2,
      title: "Search the Database",
      content: "Each state maintains its own database of unclaimed property. You'll be directed to the official state website where you can search for free using your name and previous addresses.",
      tips: [
        "Try different variations of your name (nicknames, maiden names, etc.)",
        "Include middle initials",
        "Search with and without punctuation"
      ]
    },
    {
      number: 3,
      title: "Verify Ownership",
      content: "If you find property that belongs to you, you'll need to prove your identity and ownership. Each state has different requirements, but commonly needed documents include:",
      tips: []
    },
    {
      number: 4,
      title: "Submit Your Claim",
      content: "Once you have the required documentation, submit your claim through the state's official process. This can usually be done online, by mail, or sometimes in person.",
      tips: [
        "Processing time varies by state but typically takes 30-90 days",
        "Keep copies of all submitted documents",
        "Follow up if you don't hear back within the stated timeframe"
      ]
    },
    {
      number: 5,
      title: "Receive Your Money",
      content: "After your claim is approved and processed, you'll receive your unclaimed property. This could be in the form of a check, direct deposit, or return of physical items like safe deposit box contents.",
      tips: []
    }
  ];

  const identityDocs = [
    "Driver's license or state ID",
    "Social Security card",
    "Birth certificate",
    "Passport"
  ];

  const ownershipDocs = [
    "Bank statements",
    "Employment records",
    "Insurance documents",
    "Utility bills"
  ];

  return (
    <>
      <SEOHead
        title="How It Works - Step by Step Guide to Finding Unclaimed Money"
        description="Learn how to find and claim unclaimed money with our step-by-step guide. Includes tips, required documents, and scam warnings."
        keywords="how to find unclaimed money, unclaimed property process, claiming unclaimed money, step by step guide"
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
              <li className="text-gray-900 font-medium">How It Works</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            How It Works
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Step-by-step guide to finding and claiming your unclaimed money
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Steps */}
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border-l-4 border-secondary">
              <div className="flex items-start">
                <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">{step.content}</p>
                  
                  {step.number === 2 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <div className="flex items-start">
                        <Lightbulb className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-blue-800">Pro Tip:</strong>
                          <span className="text-blue-700 ml-1">
                            Try different variations of your name (nicknames, maiden names, etc.) and include middle initials.
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {step.number === 3 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h6 className="font-semibold text-gray-900 mb-3">Identity Documents:</h6>
                        <ul className="space-y-2">
                          {identityDocs.map((doc) => (
                            <li key={doc} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-semibold text-gray-900 mb-3">Ownership Proof:</h6>
                        <ul className="space-y-2">
                          {ownershipDocs.map((doc) => (
                            <li key={doc} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  {step.number === 4 && (
                    <p className="font-semibold text-primary text-lg">
                      Processing time varies by state but typically takes 30-90 days.
                    </p>
                  )}
                  
                  {step.tips.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {step.tips.map((tip) => (
                        <li key={tip} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Section */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3" />
              Important Scam Warning
            </h4>
            <p className="text-lg text-yellow-700 mb-6">
              Protect yourself from unclaimed property scams:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-lg font-semibold text-red-700 mb-4 flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  Never Pay Fees
                </h5>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-red-500 mr-2 mt-1">✗</div>
                    <span className="text-gray-700">Legitimate claims are always FREE</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-red-500 mr-2 mt-1">✗</div>
                    <span className="text-gray-700">No "processing fees" or "finder's fees"</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-red-500 mr-2 mt-1">✗</div>
                    <span className="text-gray-700">No upfront payments required</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-red-500 mr-2 mt-1">✗</div>
                    <span className="text-gray-700">States don't charge to return your money</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Red Flags to Avoid
                </h5>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-red-500 mr-2 mt-1">⚠</div>
                    <span className="text-gray-700">Companies requesting payment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-red-500 mr-2 mt-1">⚠</div>
                    <span className="text-gray-700">High-pressure sales tactics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-red-500 mr-2 mt-1">⚠</div>
                    <span className="text-gray-700">Requests for bank account info upfront</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-red-500 mr-2 mt-1">⚠</div>
                    <span className="text-gray-700">Claims that "time is running out"</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-red-100 border border-red-200 rounded-lg p-4 mt-6">
              <p className="text-red-800 font-semibold">
                <strong>Remember:</strong> Always search and claim directly through official state websites. 
                No third-party company is needed to help you claim your property.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Search?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Now that you know how the process works, choose your state and begin searching for unclaimed money.
          </p>
          <Link href="/states">
            <button 
              className="bg-primary hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              data-testid="cta-start-search"
            >
              Start Your Search Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
