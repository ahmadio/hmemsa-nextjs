// components/navigation.tsx
import Link from "next/link";
import { Link as LinkItem } from "@/sanity/types";
import Image from "next/image";
import type { SITE_SETTINGS_QUERYResult } from "@/sanity/types";
import { urlForImage } from "@/sanity/helpers";
import { NavLink } from "@/components/nav-link";
import { DonateButton } from "@/components/donate-button";

interface NavigationProps {
  settings: SITE_SETTINGS_QUERYResult;
}

const getHref = (link: LinkItem | undefined) => {
  if (!link) return "#";
  switch (link.type) {
    case "external":
      return link.externalLink || "#";
    case "internal":
      return link.internalLink
        ? `/${link.internalLink._type}/${link.internalLink._ref}`
        : "#";
    case "path":
      return link.path || "#";
    default:
      return "#";
  }
};

export function Navigation({ settings }: NavigationProps) {
  // Fallback navigation if no Sanity data
  const defaultNavigation = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Impact", href: "/impact" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Use Sanity navigation items if available, otherwise use default
  const navigationItems =
    settings?.mainNav?.items?.map((item) => {
      // Ensure we have a valid link object
      if (!item.link) {
        return { name: "undefined", href: "#" };
      }

      return {
        name: item.link.text || "",
        href: getHref(item.link),
      };
    }) || defaultNavigation;

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <nav className="mx-auto max-w-[1440px] h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              {settings?.logo?.image?.asset ? (
                <Image
                  src={urlForImage(settings.logo.image.asset).url()}
                  alt={settings.logo.image.alt || settings.siteName || "Hmemsa"}
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              ) : (
                <span className="font-bold text-xl">
                  {settings?.siteName || "Hmemsa"}
                </span>
              )}
            </Link>
            <div className="hidden md:flex gap-6">
              {navigationItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <DonateButton />
          </div>
        </div>
      </nav>
    </header>
  );
}
