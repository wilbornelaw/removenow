import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RemoveNow | Shieldify IP",
  description:
    "Professional brand protection takedowns across social media, marketplaces, and domains.",
  metadataBase: new URL("https://removenow.online"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RemoveNow | Shieldify IP",
    description:
      "Professional brand protection takedowns across social media, marketplaces, and domains.",
    url: "https://removenow.online",
    siteName: "RemoveNow",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "RemoveNow preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RemoveNow | Shieldify IP",
    description:
      "Professional brand protection takedowns across social media, marketplaces, and domains.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body className={`${manrope.variable} bg-slate-50 text-slate-900 antialiased`}>
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${gaId}', { send_page_view: false });`}
            </Script>
          </>
        )}

        <div className="relative min-h-screen overflow-x-clip">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-25" />
          <div className="pointer-events-none absolute -left-16 top-24 -z-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-72 -z-10 h-72 w-72 rounded-full bg-fuchsia-300/15 blur-3xl" />
          <Analytics />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
