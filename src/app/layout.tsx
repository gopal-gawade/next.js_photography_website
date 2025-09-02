import "./globals.css";
import Scroll from "../components/scroll/Scroll";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.suyogvilankarphotography.space/"),
  title: {
    default: "Suyog Vilankar Photography",
    template: "%s | Suyog Vilankar Photography",
  },
  description:
    "Suyog Vilankar Photography - Wedding and candid photographer in Ratnagiri & Sindhudurg. Capturing emotions, stories, and timeless love since 2020.",
  keywords: [
    "Wedding Photographer Ratnagiri",
    "Photographer Sindhudurg",
    "Candid Photography Ratnagiri",
    "Suyog Vilankar Photography",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.suyogvilankarphotography.space/",
    siteName: "Suyog Vilankar Photography",
  },
  alternates: {
    canonical: "https://www.suyogvilankarphotography.space/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={`bg-[#FFF8E7] flex flex-col justify-between w-full min-h-[100vh]`}>
        <Scroll/>

        <nav>
          <Navbar />
        </nav>

        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
