import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main 
        id="main-content" 
        className="flex-grow pt-0 focus:outline-none" 
        role="main"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
