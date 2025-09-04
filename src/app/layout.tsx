import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#D4AF37'
}

export const metadata: Metadata = {
  metadataBase: new URL('https://elitemindacademy.ro'),
  title: {
    default: "Elite Mind Academy - Meditatii si Cursuri pentru Elevi",
    template: "%s | Elite Mind Academy"
  },
  description: "Meditatii si Cursuri dedicate elevilor din ciclul primar si gimnazial la Matematica, Romana, Engleza, Franceza, Germana, Fizica, Sah",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    canonical: "/",
    languages: {
      'ro-RO': '/ro',
      'x-default': '/'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://elitemindacademy.ro',
    siteName: 'Elite Mind Academy',
    title: 'Elite Mind Academy - Meditatii si Cursuri pentru Elevi in Sectorul 6',
    description: 'Centru educational specializat in meditatii la matematica, romana, engleza, germana, fizica si sah pentru elevi din ciclul primar si gimnazial in Sectorul 6, Bucuresti.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elite Mind Academy - Centru Educational Sectorul 6',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Elite Mindacademy',
    creator: '@Elite Mindacademy',
    title: 'Elite Mind Academy - Meditatii si Cursuri pentru Elevi',
    description: 'Centru educational specializat in meditatii la matematica, romana, engleza, germana, fizica si sah pentru elevi din Sectorul 6, Bucuresti.',
    images: ['/images/twitter-image.jpg'],
  },
  other: {
    'geo.region': 'RO-B',
    'geo.placename': 'Bucuresti, Sector 6',
    'geo.position': '44.415889956114775;26.013340269668557',
    'ICBM': '44.415889956114775, 26.013340269668557',
    'contact': 'elitemindacademy2025@gmail.com',
    'author': 'Elite Mind Academy'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Elite Mind Academy" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main style={{ paddingTop: '80px' }}>{children}</main>
        <Footer />
        
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["EducationalOrganization", "LocalBusiness"],
                "name": "Elite Mind Academy",
                "alternateName": "Elite Mind Academy",
                "legalName": "ELITE MIND ACADEMY SRL",
                "description": "Centru educational specializat in meditatii si cursuri pentru elevi din Sectorul 6 Bucuresti. Oferim cursuri de matematica, romana, limbi straine, fizica si sah pentru ciclul primar si gimnazial.",
                "url": "https://elitemindacademy.ro",
                "telephone": "+40744550445",
                "email": "elitemindacademy2025@gmail.com",
                "foundingDate": "2025",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Strada Valea Oltului nr 73-75, etaj 2",
                  "addressLocality": "București",
                  "postalCode": "060841",
                  "addressRegion": "Sector 6",
                  "addressCountry": "RO"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "44.415889956114775",
                  "longitude": "26.013340269668557"
                },
                "areaServed": {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": "44.415889956114775",
                    "longitude": "26.013340269668557"
                  },
                  "geoRadius": "10000"
                },
                "sameAs": [
                  "https://www.instagram.com/elitemind_academy/",
                  "https://www.facebook.com/elitemindacademy"
                ],
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "14:00",
                    "closes": "20:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Saturday"],
                    "opens": "09:00",
                    "closes": "17:00"
                  }
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Cursuri si Meditatii Elite Mind Academy",
                  "itemListElement": [
                    {
                      "@type": "Course",
                      "name": "Meditatii Matematica",
                      "description": "Cursurile noastre de matematică sunt structurate pentru a acoperi toate nivelurile de pregătire, de la consolidarea bazelor până la pregătirea pentru examene naționale.",
                      "provider": {
                        "@type": "EducationalOrganization",
                        "name": "Elite Mind Academy"
                      },
                      "courseMode": ["onsite", "blended"],
                      "educationalLevel": ["elementary", "middle"],
                      "teaches": ["mathematics", "algebra", "geometry"],
                      "hasCourseInstance": {
                        "@type": "CourseInstance",
                        "courseMode": "onsite",
                        "courseSchedule": "P0D",
                        "location": {
                          "@type": "Place",
                          "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Strada Valea Oltului nr 73-75, etaj 2",
                            "addressLocality": "București",
                            "addressRegion": "Sector 6",
                            "addressCountry": "RO"
                          }
                        }
                      }
                    },
                    {
                      "@type": "Course",
                      "name": "Meditatii Romana",
                      "description": "Meditațiile de română dezvoltă competențele de exprimare orală și scrisă, analiza literară și redactarea creativă.",
                      "provider": {
                        "@type": "EducationalOrganization",
                        "name": "Elite Mind Academy"
                      },
                      "courseMode": ["onsite", "blended"],
                      "educationalLevel": ["elementary", "middle"],
                      "teaches": ["romanian literature", "grammar", "writing"],
                      "hasCourseInstance": {
                        "@type": "CourseInstance",
                        "courseMode": "onsite",
                        "courseSchedule": "P0D",
                        "location": {
                          "@type": "Place",
                          "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Strada Valea Oltului nr 73-75, etaj 2",
                            "addressLocality": "București",
                            "addressRegion": "Sector 6",
                            "addressCountry": "RO"
                          }
                        }
                      }
                    },
                    {
                      "@type": "Course",
                      "name": "Cursuri Limbi Straine",
                      "description": "Cursurile de limbi străine (engleză, germană) combină învățarea gramaticii cu dezvoltarea competențelor de comunicare practică.",
                      "provider": {
                        "@type": "EducationalOrganization",
                        "name": "Elite Mind Academy"
                      },
                      "courseMode": ["onsite", "blended"],
                      "educationalLevel": ["elementary", "middle"],
                      "teaches": ["english", "german", "foreign languages"],
                      "availableLanguage": ["en", "de"],
                      "hasCourseInstance": {
                        "@type": "CourseInstance",
                        "courseMode": "onsite",
                        "courseSchedule": "P0D",
                        "location": {
                          "@type": "Place",
                          "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Strada Valea Oltului nr 73-75, etaj 2",
                            "addressLocality": "București",
                            "addressRegion": "Sector 6",
                            "addressCountry": "RO"
                          }
                        }
                      }
                    },
                    {
                      "@type": "Course",
                      "name": "Cursuri Fizica",
                      "description": "Cursurile de fizică transformă conceptele abstracte în experiențe concrete prin experimente și aplicații practice.",
                      "provider": {
                        "@type": "EducationalOrganization",
                        "name": "Elite Mind Academy"
                      },
                      "courseMode": ["onsite"],
                      "educationalLevel": ["middle"],
                      "teaches": ["physics", "experiments", "science"],
                      "hasCourseInstance": {
                        "@type": "CourseInstance",
                        "courseMode": "onsite",
                        "courseSchedule": "P0D",
                        "location": {
                          "@type": "Place",
                          "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Strada Valea Oltului nr 73-75, etaj 2",
                            "addressLocality": "București",
                            "addressRegion": "Sector 6",
                            "addressCountry": "RO"
                          }
                        }
                      }
                    },
                    {
                      "@type": "Course",
                      "name": "Cursuri Sah",
                      "description": "Cursurile de șah dezvoltă gândirea strategică, concentrarea și răbdarea pentru dezvoltarea intelectuală completă.",
                      "provider": {
                        "@type": "EducationalOrganization",
                        "name": "Elite Mind Academy"
                      },
                      "courseMode": ["onsite"],
                      "educationalLevel": ["elementary", "middle"],
                      "teaches": ["chess", "strategy", "logical thinking"],
                      "hasCourseInstance": {
                        "@type": "CourseInstance",
                        "courseMode": "onsite",
                        "courseSchedule": "P0D",
                        "location": {
                          "@type": "Place",
                          "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Strada Valea Oltului nr 73-75, etaj 2",
                            "addressLocality": "București",
                            "addressRegion": "Sector 6",
                            "addressCountry": "RO"
                          }
                        }
                      }
                    }
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Ce tipuri de cursuri oferiti la Elite Mind Academy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Oferim cursuri si meditatii la Matematica, Romana, Limbi Straine (Engleza, Germana), Fizica si Sah pentru elevi din ciclul primar si gimnazial."
                    }
                  },
                  {
                    "@type": "Question", 
                    "name": "Unde va aflati in Bucuresti?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ne aflam in Sectorul 6, pe Strada Valea Oltului nr 73-75, etaj 2. Suntem usor accesibili cu transportul in comun."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Cum pot programa o sedinta de meditatii?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                                             "text": "Puteti sa ne contactati la telefon 0744 550 445 sau prin email la elitemindacademy2025@gmail.com pentru a programa o evaluare gratuita si o sedinta de meditatii."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </body>
    </html>
  );
}
