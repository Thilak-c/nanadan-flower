import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Nandan Flower - Best Wedding Florist in Patna | Bridal Bouquets & Event Decoration",
  description: "Nandan Flower is Patna's premier wedding florist. Expert bridal bouquets, wedding decoration, mehendi & reception flowers. 15+ years experience. Book consultation today!",
  keywords: "wedding florist patna, bridal bouquet patna, wedding decoration patna, mehendi decoration, reception flowers, wedding flowers bihar, best florist patna, wedding arch decoration, wedding centerpieces, bridal bouquet design, wedding floral designer, wedding flower arrangements, wedding venue decoration, wedding ceremony flowers, wedding reception decoration, wedding flower packages, wedding flower consultation, wedding flower delivery patna",
  authors: [{ name: "Nandan Singh - Nandan Flower" }],
  creator: "Nandan Flower",
  publisher: "Nandan Flower",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nanadanflower.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Nandan Flower - Best Wedding Florist in Patna | Bridal Bouquets & Event Decoration",
    description: "Nandan Flower is Patna's premier wedding florist. Expert bridal bouquets, wedding decoration, mehendi & reception flowers. 15+ years experience. Book consultation today!",
    url: "https://nanadanflower.in",
    siteName: "Nandan Flower",
    images: [
      {
        url: "/images/IMG-20250501-WA0034.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding Floral Design by Nandan Flower - Bridal Bouquet and Ceremony Decoration",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandan Flower - Best Wedding Florist in Patna",
    description: "Expert wedding florist in Patna. Bridal bouquets, wedding decoration, mehendi & reception flowers. 15+ years experience.",
    images: ["/images/IMG-20250501-WA0034.jpg"],
    creator: "@thesinghcelebration",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  // Structured Data for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Florist",
    "name": "Nandan Flower",
    "description": "Premier wedding florist in Patna, Bihar. Expert bridal bouquets, wedding decoration, mehendi & reception flowers. 15+ years of experience in floral design.",
    "url": "https://nanadanflower.in",
    "telephone": "+917979962614",
    "email": "thesinghcelebrationguesthouse@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "254, Patliputra Colony",
      "addressLocality": "Patna",
      "postalCode": "800013",
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.5941",
      "longitude": "85.1376"
    },
    "openingHours": [
      "Mo-Fr 09:00-19:00",
      "Sa 10:00-18:00"
    ],
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, UPI, Bank Transfer",
    "areaServed": [
      {
        "@type": "City",
        "name": "Patna"
      },
      {
        "@type": "State",
        "name": "Bihar"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wedding Floral Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bridal Bouquet Design",
            "description": "Custom bridal bouquets for weddings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Ceremony Decoration",
            "description": "Complete wedding ceremony floral decoration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Reception Decoration",
            "description": "Wedding reception venue floral decoration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mehendi Decoration",
            "description": "Mehendi ceremony floral decoration"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/thesinghcelebration/",
      "https://www.facebook.com/thesinghcelebration",
      "https://www.youtube.com/channel/UC3svN8FoR-XetWsZ8_OaMZw"
    ],
    "image": [
      "https://nanadanflower.in/images/IMG-20250501-WA0034.jpg",
      "https://nanadanflower.in/images/IMG-20250501-WA0031.jpg",
      "https://nanadanflower.in/images/IMG-20250501-WA0028.jpg"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 