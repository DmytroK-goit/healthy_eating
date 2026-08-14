import Header from "@/component/header";
import Footer from "@/component/footer";
import "./globals.css";
import { Manrope } from "next/font/google";
import ScrollToTop from "@/component/ScrollToTop";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = {
  title: {
    default: "Meals America | Healthy Home-Delivered Meals",
    template: "%s | Meals America",
  },

  description:
    "Meals America provides healthy home-delivered meals for seniors, families, and individuals across Florida. Fresh, nutritious, and ready-to-heat meal plans delivered directly to your door.",

  keywords: [
    "Meals America",
    "meal delivery",
    "healthy meals",
    "home delivered meals",
    "nutrition plans",
    "prepared meals",
    "Florida meal delivery",
    "senior meal delivery",
    "healthy food",
    "ready to heat meals",
  ],

  authors: [{ name: "Meals America" }],
  creator: "Meals America",
  publisher: "Meals America",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Meals America | Healthy Home-Delivered Meals",
    description:
      "Healthy, nutritious, and ready-to-heat meals delivered directly to your home throughout Florida.",
    url: "https://healthy-eating-nine.vercel.app/",
    siteName: "Meals America",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meals America",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Meals America | Healthy Home-Delivered Meals",
    description:
      "Healthy meal delivery for seniors, families, and individuals.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://healthy-eating-nine.vercel.app/",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
