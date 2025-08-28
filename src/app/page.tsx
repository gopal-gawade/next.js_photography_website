import { Metadata } from "next";
import Homepage from "../components/homepage/Homepage";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Wedding Photographer in Ratnagiri | Top Photographer Suyog Vilankar",
  description:
    "Looking for the best wedding photographer in Ratnagiri? Suyog Vilankar is a top photographer in Ratnagiri, specializing in candid wedding photography, pre-weddings, and timeless love stories.",
  keywords: [
    "best photographer in Ratnagiri",
    "best wedding photographer in Ratnagiri",
    "top photographer in Ratnagiri",
    "top wedding photographer in Ratnagiri",
    "candid photography Ratnagiri",
    "Sindhudurg wedding photography",
  ],
  openGraph: {
    title: "Best Wedding Photographer in Ratnagiri | Suyog Vilankar",
    description:
      "Top photographer in Ratnagiri capturing heartfelt weddings and pre-wedding moments. Book Suyog Vilankar Photography for authentic and timeless memories.",
    url: "https://www.suyogvilankarphotography.space/",
    type: "website",
   /*
    images: [
      {
        url: "https://www.suyogvilankarphotography.space/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Wedding Photographer in Ratnagiri - Suyog Vilankar",
      },
    ],
   */
  },
  alternates: {
    canonical: "https://www.suyogvilankarphotography.space/",
  },
};

export default function Home() {
  return (
    <div className={`${open_sans.className} flex flex-col items-center justify-between min-h-screen bg-[#FFF8E7]`} >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Best Wedding Photographer in Ratnagiri | Suyog V. Photography",
            description:
              "Best wedding photographer in Ratnagiri. Capture your special day with Suyog V. Photography, offering heartfelt wedding photography in Ratnagiri.",
            url: "https://suyog-vilankar-photography.vercel.app",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ratnagiri",
              addressRegion: "Maharashtra",
              addressCountry: "India",
            },
          }),
        }}
      />

      <main className="w-full h-full">
        <Homepage />
      </main>
    </div>
  );
}
