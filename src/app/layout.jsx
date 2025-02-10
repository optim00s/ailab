import "./globals.css";

export const metadata = {
  title: {
    default: "Azerbaijan Artificial Intelligence Lab",
  },
  description: "An advancing AI research and software development company based in Azerbaijan",
  keywords: ["AI", "Artificial Intelligence", "Research", "Software Development", "ailab", "AILab.AZ", "ailab.az"],
  authors: [{ name: "Azerbaijan AI Lab Team" }],
  creator: "Azerbaijan AI Lab",
  publisher: "Azerbaijan AI Lab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ailab-roan.vercel.app/",
    siteName: "Azerbaijan Artificial Intelligence Lab",
    title: "Azerbaijan Artificial Intelligence Lab",
    description: "An advancing AI research and software development company based in Azerbaijan",
    images: [
      {
        url: "https://ailab-roan.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Azerbaijan AI Lab Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azerbaijan Artificial Intelligence Lab",
    description: "An advancing AI research and software development company based in Azerbaijan",
    creator: "@ailab.az",
    images: ["https://ailab-roan.vercel.app/images/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-0 m-0 overflow-hidden">
        {children}
      </body>
    </html>
  );
}
