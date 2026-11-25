import { Analytics } from '@vercel/analytics/next'
import { Cormorant_Garamond } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const editorial = Cormorant_Garamond({
  variable: '--font-editorial',
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: "%s || KIMHAB ORK - Affordable Luxury Fashion",
    default: "KIMHAB ORK - Affordable Luxury Fashion",
  },
  description: "Discover KIMHAB ORK, an affordable luxury womenswear brand offering unique, high-quality designs and fabrics.",
  authors: [{ name: "KIMHAB ORK - Affordable Luxury Fashion" }],
  referrer: "origin-when-cross-origin",
  applicationName: "KIMHAB ORK - Affordable Luxury Fashion",
  keywords: [
    "fashion",
    "fashion designer",
    "fashion brand",
    "Luxury brand",
    "Cambodia fashion",
    "fashion retail",
    "fashion innovation",
    "fashion business",
    "fashion studio",
    "design and art",
  ],
  category: "design atelier",
  openGraph: {
    title: "KIMHAB ORK - Affordable Luxury Fashion",
    siteName: "KIMHAB ORK - Affordable Luxury Fashion",
    description: "Discover KIMHAB ORK, an affordable luxury womenswear brand offering unique, high-quality designs and fabrics.",
    images: {
      url: "https://ik.imagekit.io/digimoda/assets/media/og.webp",
      width: 1200,
      height: 680,
    },
    url: "https://kimhabork.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "KIMHAB ORK - Affordable Luxury Fashion",
    card: "summary_large_image",
    creator: "@kimhabork_official",
    description: "Discover KIMHAB ORK, an affordable luxury womenswear brand offering unique, high-quality designs and fabrics.",
    images: ["https://ik.imagekit.io/digimoda/assets/media/og.webp"],
  },
  alternates: {
    canonical: "https://www.kimhabork.com",
  },
  creator: "KIMHAB ORK",
  publisher: "KIMHAB ORK",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "https://kimhabork.com/manifest.json",
  icons: {
    shortcut: { url: "/favicon.ico", type: "image/x-icon" },
    icon: [
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
      new URL("/favicon/favicon.ico", "https://kimhabork.com/favicon.ico"),
      {
        url: "/favicon.svg",
        type: "image/svg",
        sizes: "1024x1024",
      },
      {
        url: "/favicon/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/favicon/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: "/favicon/andriod-icon-36x36.png",
        type: "image/png",
        sizes: "36x36",
      },
      {
        url: "/favicon/andriod-icon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
      {
        url: "/favicon/andriod-icon-72x72.png",
        type: "image/png",
        sizes: "72x72",
      },
      {
        url: "/favicon/andriod-icon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: "/favicon/andriod-icon-144x144.png",
        type: "image/png",
        sizes: "144x144",
      },
      {
        url: "/favicon/andriod-icon-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/favicon/andriod-icon-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
    {
      url: "/favicon/apple-icon.png",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-57x57.png",
      sizes: "57x57",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-60x60.png",
      sizes: "60x60",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-72x72.png",
      sizes: "72x72",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-76x76.png",
      sizes: "76x76",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-114x114.png",
      sizes: "114x114",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-120x120.png",
      sizes: "120x120",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-144x144.png",
      sizes: "144x144",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-152x152.png",
      sizes: "152x152",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-180x180.png",
      sizes: "180x180",
      type: "image/png",
    }, ],
    other: [
    {
      url: "/favicon/ms-icon-144x144.png",
      sizes: "144x144",
      type: "image/png",
    },
    {
      url: "/favicon/ms-icon-150x150.png",
      sizes: "150x150",
      type: "image/png",
    },
    {
      url: "/favicon/ms-icon-310x310.png",
      sizes: "310x310",
      type: "image/png",
    },
    {
      url: "/favicon/ms-icon-70x70.png",
      sizes: "70x70",
      type: "image/png",
    }, ],
  },
  robots: {
    index: true,
    nocache: false,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly < {
  children: React.ReactNode
} > ) {
  return (
    <html lang="en">
      <body className={`antialiased font-sans text-[clamp(0.875rem,1vw,1rem)] ${editorial.variable}`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}