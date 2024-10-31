import "./globals.css";
import { Inter } from "next/font/google";
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import type { SITE_SETTINGS_QUERYResult } from "@/sanity/types";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { DonationProvider } from "@/components/donation/donation-provider";
import { urlForImage } from "@/sanity/helpers";

const inter = Inter({ subsets: ["latin"] });

const options = { next: { revalidate: 60 } };

const SITE_SETTINGS_QUERY = defineQuery(
  `
  *[_type == "siteSettings"][0]
  `
);

export async function generateMetadata() {
  // const settings = await getSiteSettings();

  const settings = await client.fetch(SITE_SETTINGS_QUERY, {}, {});

  const defaultTitle = "Hmemsa - Empowering Moroccan Children";
  const defaultDesc =
    "Dedicated to improving education and healthcare for underprivileged Moroccan children.";

  return {
    title: settings?.defaultSeo?.title || defaultTitle,
    description: settings?.defaultSeo?.description || defaultDesc,
    keywords: settings?.defaultSeo?.keywords,
    metadataBase: new URL(
      process.env.VERCEL_PROJECT_PRODUCTION_URL || "http://localhost:3000"
    ),
    openGraph: settings?.defaultSeo?.ogImage?.image?.asset
      ? {
          images: [
            {
              url: urlForImage(settings.defaultSeo.ogImage.image.asset)
                .width(1200)
                .height(630)
                .url(),
              width: 1200,
              height: 630,
              alt:
                settings.defaultSeo.ogImage.image.alt ||
                settings.defaultSeo.title ||
                defaultTitle,
            },
          ],
        }
      : undefined,
    robots: {
      index: !settings?.defaultSeo?.noIndex,
      follow: !settings?.defaultSeo?.noIndex,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await client.fetch(SITE_SETTINGS_QUERY, {}, {});

  return (
    <html lang="en" className="min-h-screen">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navigation settings={settings} />
        <main className="flex-1 w-full">{children}</main>
        <Footer settings={settings} />
        <DonationProvider />
      </body>
    </html>
  );
}
