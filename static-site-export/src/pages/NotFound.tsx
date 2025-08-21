import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
  return (
    <>
      <SEOHead 
        title="Page Not Found - Find Unclaimed Money"
        description="The page you're looking for doesn't exist. Return to our unclaimed money directory to find legitimate state resources."
      />
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-x-4">
          <Link 
            href="/" 
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            data-testid="link-home"
          >
            Go Home
          </Link>
          <Link 
            href="/states" 
            className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors inline-block"
            data-testid="link-states"
          >
            Browse States
          </Link>
        </div>
      </div>
    </>
  );
}