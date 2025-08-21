import { Link } from "wouter";
import { Shield, AlertTriangle, Info, Eye, Phone } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function About() {
  return (
    <>
      <SEOHead
        title="About & Disclaimer - Find Unclaimed Money Directory"
        description="Important information about our unclaimed money directory service. We are a private informational resource, not affiliated with any government agency."
        keywords="about unclaimed money directory, disclaimer, privacy policy, not government website"
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
              <li className="text-gray-900 font-medium">About & Disclaimer</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            About & Disclaimer
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Important information about this resource
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* About This Website */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">About This Website</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              This is a private informational resource designed to help people find unclaimed money 
              through official state databases.
            </p>
            
            <h5 className="text-lg font-semibold text-gray-900 mb-4">Our Mission</h5>
            <p className="text-gray-700 mb-4">
              We provide a centralized directory to help you easily access all official state unclaimed property websites. Our goal is to:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Make it easier to find official state resources</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Educate people about unclaimed property</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Help protect against scams and fraudulent services</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Provide clear, step-by-step guidance</span>
              </li>
            </ul>

            <h5 className="text-lg font-semibold text-gray-900 mb-4">What We Do NOT Do</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="text-red-500 mr-2 mt-1">✗</div>
                <span className="text-gray-700">We do not handle claims or money transfers</span>
              </li>
              <li className="flex items-start">
                <div className="text-red-500 mr-2 mt-1">✗</div>
                <span className="text-gray-700">We do not store or process personal information</span>
              </li>
              <li className="flex items-start">
                <div className="text-red-500 mr-2 mt-1">✗</div>
                <span className="text-gray-700">We do not charge any fees for our service</span>
              </li>
              <li className="flex items-start">
                <div className="text-red-500 mr-2 mt-1">✗</div>
                <span className="text-gray-700">We do not guarantee the existence of unclaimed property</span>
              </li>
            </ul>
          </div>

          {/* Important Disclaimers */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3" />
              Important Disclaimers
            </h3>
            
            <div className="space-y-6">
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Not a Government Website</h5>
                <p className="text-gray-700 leading-relaxed">
                  This website is <strong>NOT</strong> affiliated with, endorsed by, or connected to any federal, 
                  state, or local government agency. We are an independent, private informational resource.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">No Guarantee of Results</h5>
                <p className="text-gray-700 leading-relaxed">
                  We cannot guarantee that you have unclaimed property waiting for you. The existence and amount 
                  of any unclaimed property can only be determined by searching the official state databases.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">External Links</h5>
                <p className="text-gray-700 leading-relaxed">
                  This website contains links to official state government websites. We are not responsible for 
                  the content, accuracy, or availability of these external sites. All searches and claims must 
                  be completed through the official state websites.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Information Accuracy</h5>
                <p className="text-gray-700 leading-relaxed">
                  While we strive to provide accurate information, unclaimed property laws and procedures can change. 
                  Always verify current requirements and procedures on the official state websites.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <Eye className="w-6 h-6 mr-3" />
              Privacy Policy
            </h3>
            
            <div className="space-y-6">
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Information We Collect</h5>
                <p className="text-gray-700 leading-relaxed">
                  This website is static and does not collect, store, or process any personal information. 
                  We do not use cookies, tracking pixels, or any other data collection methods.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Analytics</h5>
                <p className="text-gray-700 leading-relaxed">
                  We may use anonymous analytics tools (like Google Analytics) to understand website usage patterns. 
                  This data is anonymous and cannot be used to identify individual users.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">External Websites</h5>
                <p className="text-gray-700 leading-relaxed">
                  When you click links to state websites, you leave our site and are subject to the privacy 
                  policies of those government websites.
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <Phone className="w-6 h-6 mr-3" />
              Contact & Support
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              For questions about unclaimed property claims, contact the appropriate state office directly. 
              We cannot provide assistance with individual claims or technical issues with state websites.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h5 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                <Info className="w-5 h-5 mr-2" />
                Need Help?
              </h5>
              <p className="text-blue-700">
                For the most accurate and up-to-date information, always consult the official state 
                unclaimed property websites directly. Each state has specific procedures and requirements 
                for claiming property.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Website Issues</h5>
              <p className="text-gray-700 leading-relaxed">
                If you experience technical issues with our directory or find outdated information, 
                please note that this is a static informational resource and updates may not be immediate.
              </p>
            </div>
          </div>

          {/* Final Warning Box */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 sm:p-6 lg:p-8">
            <div className="flex items-start">
              <Shield className="w-8 h-8 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-yellow-800 mb-4">Final Reminder About Scams</h4>
                <p className="text-yellow-700 text-lg leading-relaxed mb-4">
                  This is a free informational resource. Legitimate unclaimed property claims never require 
                  upfront fees. Always use official state websites.
                </p>
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                  <p className="text-yellow-800 font-medium">
                    <strong>Remember:</strong> If someone contacts you claiming you have unclaimed money and asks for 
                    payment or personal information upfront, it's likely a scam. Legitimate claims are always free.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Search for Your Money?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Now that you understand how our directory works and the importance of using official resources, 
              start your search today.
            </p>
            <Link href="/states">
              <button 
                className="bg-primary hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                data-testid="cta-search-now"
              >
                Search Official Databases Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
