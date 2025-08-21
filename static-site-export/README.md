# Find Unclaimed Money Directory

A comprehensive static website helping people locate unclaimed property and money in the United States through official state databases.

## 🎯 Project Overview

This website serves as a trusted directory for unclaimed money resources across all 50 US states. It provides:
- **Safe, official pathways** to legitimate unclaimed property searches
- **Educational content** about the unclaimed money process
- **Mobile-responsive design** optimized for all devices
- **Complete SEO optimization** for better discoverability

## 🚀 Features

### User-Focused Design
- **State-by-state directory** with official database links
- **Educational "How It Works" section** explaining the process
- **Scam prevention guidance** to protect users
- **Professional, trustworthy appearance** appropriate for financial information

### Technical Excellence
- **Mobile-first responsive design** with 44px minimum touch targets
- **Complete SEO optimization** with meta tags, structured data, and sitemap
- **Accessibility features** including ARIA labels and keyboard navigation
- **Fast loading performance** optimized for all devices
- **GitHub Actions deployment** for automatic updates

### SEO & Performance
- **Comprehensive meta tags** for better search engine visibility
- **XML sitemap** for search engine indexing
- **Robots.txt** for proper crawling guidance
- **Open Graph tags** for social media sharing
- **Web app manifest** for PWA capabilities

## 🛠️ Technology Stack

- **React** - Modern UI framework
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first styling with mobile-first approach
- **Vite** - Fast build tool and development server
- **Wouter** - Lightweight client-side routing
- **Lucide React** - Clean, professional icons

## 📱 Mobile Optimization

- **Touch-friendly interface** with proper touch target sizes
- **Responsive typography** scaling from mobile to desktop
- **Mobile-optimized navigation** with hamburger menu
- **Optimized images and assets** for fast mobile loading
- **Progressive Web App features** for mobile app-like experience

## 🔍 SEO Features

### Technical SEO
- **Structured data** (Schema.org JSON-LD) for rich search results
- **Comprehensive meta tags** with keywords and descriptions
- **XML sitemap** with proper page priorities
- **Robots.txt** for search engine guidance
- **Canonical URLs** to prevent duplicate content issues

### Content Optimization
- **Keyword-rich content** targeting unclaimed money searches
- **Local SEO optimization** for state-specific searches
- **Internal linking strategy** to boost page authority
- **Optimized headings** following proper H1-H6 hierarchy

## 📂 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Layout.tsx      # Main layout with navigation and footer
│   ├── Navigation.tsx  # Mobile-optimized navigation
│   └── Footer.tsx      # Site footer with links
├── pages/              # Website pages
│   ├── Home.tsx        # Homepage with hero and features
│   ├── StateDirectory.tsx  # State listing page
│   ├── StatePage.tsx   # Individual state information
│   ├── HowItWorks.tsx  # Educational content
│   └── About.tsx       # About page and disclaimers
├── data/               # Static data for states
├── lib/                # Utility functions
└── App.tsx             # Main application component

public/
├── robots.txt          # Search engine crawling instructions
├── sitemap.xml         # Complete site structure
├── site.webmanifest    # PWA configuration
└── favicon files       # Site icons and branding
```

## 🚀 Deployment

This project is configured for **GitHub Pages** with automatic deployment:

### GitHub Actions Workflow
- **Automatic builds** on every push to main branch
- **Optimized production builds** with Vite
- **Zero-downtime deployment** to GitHub Pages
- **Build caching** for faster deployments

### Manual Deployment
```bash
npm install          # Install dependencies
npm run build        # Create production build
npm run preview      # Preview production build locally
```

## 🎨 Design System

### Color Palette
- **Primary Blue** (#2563eb) - Trust and reliability
- **Supporting Colors** - Grays and whites for clean, professional appearance
- **Accent Colors** - Subtle yellows for highlights and calls-to-action

### Typography
- **Inter Font** - Clean, readable typeface optimized for screens
- **Responsive scaling** - From 14px on mobile to 18px on desktop
- **Proper line heights** for optimal readability

### Components
- **Touch-friendly buttons** with 44px minimum height
- **Card-based layouts** for easy scanning
- **Consistent spacing** using Tailwind's spacing scale
- **Professional iconography** from Lucide React

## 🧪 Testing & Quality

### Performance Targets
- **Lighthouse Score** 90+ for Performance, SEO, and Accessibility
- **Core Web Vitals** optimized for mobile devices
- **Mobile-Friendly** passing Google's mobile-friendly test

### Browser Support
- **Modern browsers** (Chrome, Firefox, Safari, Edge)
- **Mobile browsers** (iOS Safari, Chrome Mobile)
- **Progressive enhancement** for older browsers

## 📈 Analytics & SEO

### Search Engine Optimization
- **Google Search Console** ready for sitemap submission
- **Rich snippets** support with structured data
- **Local search optimization** for state-specific queries
- **Social media optimization** with Open Graph tags

### Performance Monitoring
- **Core Web Vitals** tracking
- **Mobile usability** monitoring
- **Search ranking** tracking for relevant keywords

## 🛡️ Security & Privacy

### User Safety
- **External link warnings** for leaving the site
- **Official source verification** for all state database links
- **Scam prevention education** throughout the site
- **No data collection** - completely static with no backend

### Technical Security
- **HTTPS enforced** through GitHub Pages
- **No server-side vulnerabilities** (static site)
- **Content Security Policy** ready for implementation
- **Secure headers** configured in deployment

## 📞 Maintenance & Updates

### Content Updates
- **State database links** should be verified quarterly
- **Contact information** should be kept current
- **Legislative changes** may require content updates

### Technical Updates
- **Dependencies** should be updated for security
- **Browser compatibility** should be tested regularly
- **Performance metrics** should be monitored

## 🤝 Contributing

This project helps people find money that rightfully belongs to them. It's designed to be:
- **Trustworthy** - Only official, legitimate sources
- **Helpful** - Clear guidance and education
- **Accessible** - Available to all users regardless of device or ability
- **Free** - No cost to users, no data collection

## 📄 License

This project is designed to serve the public good by helping people find unclaimed money through official channels. Feel free to use and adapt this code to create similar helpful resources.

---

**Live Site**: Your GitHub Pages URL will appear here after deployment
**Last Updated**: August 2025
**Status**: Ready for deployment ✅